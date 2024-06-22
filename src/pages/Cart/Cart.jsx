import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import CartSingleRow from "./CartSingleRow";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import CheckoutModal from "../../components/Modal/CheckoutModal";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // get all carts data
  const {
    data: carts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/cart/${user?.email}`);
      return data;
    },
  });

  // delete cart data
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/cart/${id}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount) {
        toast.success("Deleted");
        refetch();
      }
    },
  });

  // total price
  const totalPrice = carts.reduce((acc, curr) => {
    return acc + parseInt(curr.price);
  }, 0);

  const handleCheckout = async () => {
    const { data } = await axiosSecure.post("/create-payment-intent", {
      price: totalPrice,
    });

    console.log("client Secrect: ", data.clientSecret);
    setClientSecret(data.clientSecret);
  };

  if (isLoading) {
    return <h2 className="text-3xl font-bold text-center">Loading...</h2>;
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>PharmEasy | Cart</title>
      </Helmet>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {carts.map((cart, index) => (
            <CartSingleRow
              key={cart._id}
              index={index}
              cart={cart}
              mutateAsync={mutateAsync}
            />
          ))}
        </tbody>
      </table>
      <CheckoutModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        totalPrice={totalPrice}
        clientSecret={clientSecret}
      />
      <div className="flex flex-col  p-6 space-y-4 sm:p-10 ">
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold"> ${totalPrice} </span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-full dark:border-red-600"
          >
            Clear All
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
              handleCheckout();
            }}
            type="button"
            className="px-6 py-2 border rounded-full bg-green-700 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
