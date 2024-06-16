import { useLocation } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import NotAvaliable from "../../../components/NotAvailable/NotAvaliable";
import MedicinePreivewModal from "../../../components/Modal/MedicinePreivewModal";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const CatagoryDetails = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [singleMedicine, setSingleMedicine] = useState({});
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const category = location.pathname.split("/")[2];
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

  // get all data
  const { data: allData = [], isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allMedicines/${category}`);
      return data;
    },
  });

  const handlePreview = (id) => {
    setSingleMedicine(allData.find((data) => data._id === id));
  };

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

  // is loading
  if (isLoading) {
    return <h1 className="text-6xl font-bold text-center my-20">Loading...</h1>;
  }

  return (
    <div>
      <MedicinePreivewModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        singleMedicine={singleMedicine}
      />
      <div>
        <h2 className="text-4xl  font-bold text-center my-3 mb-5">
          {" "}
          <span className="font-light text-2xl"> Category Name:</span>{" "}
          {category.split("%20").join(" ")}
        </h2>
      </div>
      {allData.length ? (
        <div className="overflow-x-auto container mx-auto  border-x border-base-200 border-t mt-4">
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
              {allData.map((data, index) => (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                          <img
                            src={data.image_url}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.medicineName}</td>
                  <td className="font-bold">${data.price}</td>
                  <td>
                    <button
                      onClick={() => handleAddToCart(data)}
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
                        handlePreview(data._id);
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
      ) : (
        <NotAvaliable></NotAvaliable>
      )}
    </div>
  );
};

export default CatagoryDetails;
