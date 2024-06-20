import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useRole from "../../Hooks/useRole";

const CheckoutForm = ({ setIsOpen, clientSecret, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [isError, setIsError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [role] = useRole();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setIsPending(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setIsPending(false);
      setIsError(error.message);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setIsError("");
    }

    // Confirm Payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    // if Error
    if (confirmError) {
      setIsPending(false);
      setIsError(confirmError.message);
      return;
    }

    // if payment Intent
    if (paymentIntent.status === "succeeded") {
      setIsPending(false);

      // 1. create payment info object
      const productInfo = {
        transactionId: paymentIntent.id,
        buyerInfo: {
          email: user?.email,
          name: user?.displayName,
          photo: user?.photoURL,
        },
        price: totalPrice,
      };

      setIsOpen(false);

      // 2. save payment info in payment collection (db)
      try {
        const { data } = await axiosSecure.post("/payment", productInfo);
        console.log(data);
        if (data.insertedId) {
          toast.success("successfully Payed");

          // delete cart data
          try {
            const { data } = await axiosSecure.delete(
              `/cart-delete/${user?.email}`
            );
            console.log(object);
          } catch (error) {
            console.log(error.message);
          }

          if (role === "User") {
            navigate("/dashboard/userPaymentHistory");
          }
        }
      } catch (err) {
        console.log(error);
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            disabled={!stripe || isPending}
            type="submit"
            className="inline-flex justify-center disabled:cursor-not-allowed disabled:bg-gray-400 rounded-full border border-transparent bg-green-700 px-6 py-2 text-sm font-medium text-green-100 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {isPending ? "loading.." : "Pay"}
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-full border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-red-100 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
        {isError && <p className="text-red-700">{isError}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
