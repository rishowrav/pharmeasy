import { FaRegEye } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import MedicinePreivewModal from "../../components/Modal/MedicinePreivewModal";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const Shop = () => {
  const axiosPublic = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  let [singleMedicine, setSingleMedicine] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // medicine data post to cart
  const { mutateAsync } = useMutation({
    mutationFn: async (cart) => {
      const { data } = await axiosSecure.post("/cart", cart);
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success("add to cart");
      } else {
        toast.success(data.message);
      }
    },
  });

  // get all medicines
  const { data: medicines = [] } = useQuery({
    queryKey: ["shopData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/medicines");
      return data;
    },
  });

  const handleAddToCart = (data) => {
    const cartData = {
      medicine_name: data.medicineName,
      image: data.image_url,
      category: data.category,
      price: data.price,
      cart_user: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photoURL,
      },
    };
    console.log(cartData);
    mutateAsync(cartData);
  };

  return (
    <div className="overflow-x-auto container mx-auto  border-x border-base-200 border-t mt-4">
      <MedicinePreivewModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        singleMedicine={singleMedicine}
      />

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Image</th>
            <th>Name of Product</th>
            <th>Price</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {medicines.map((medicine, ind) => (
            <tr key={medicine?._id}>
              <td>{ind + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={medicine?.image_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{medicine?.medicineName}</td>
              <td>${medicine?.price}</td>
              <td>
                <button
                  onClick={() => handleAddToCart(medicine)}
                  className="btn btn-sm bg-green-700 text-white rounded-full px-4"
                >
                  select
                </button>
              </td>
              <th>
                <button
                  className="btn  hover:bg-transparent"
                  onClick={() => {
                    setIsOpen(true);
                    setSingleMedicine(medicine);
                  }}
                >
                  {" "}
                  <FaRegEye className="text-2xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shop;
