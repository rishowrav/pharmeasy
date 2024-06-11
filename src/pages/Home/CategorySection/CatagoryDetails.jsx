import { useLocation } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import NotAvaliable from "../../../components/NotAvailable/NotAvaliable";

const CatagoryDetails = () => {
  const [medicine, setMedicine] = useState({});
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const category = location.pathname.split("/")[2];

  const { data: allData = [], isLoading } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/categoryDetails/${category}`);
      return data;
    },
  });

  if (isLoading) {
    return <h1 className="text-6xl font-bold text-center my-20">Loading...</h1>;
  }

  const handleModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const handleSingleData = async (id) => {
    const sMedicine = allData.find((data) => data._id === id);
    setMedicine(sMedicine);
  };

  return (
    <>
      {allData.length ? (
        <div className="overflow-x-auto container mx-auto  border-x border-base-200 border-t mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Name of Product</th>
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
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data.product_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{data.title}</td>
                  <td>
                    <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                      select
                    </button>
                  </td>
                  <th>
                    <button
                      className="btn  hover:bg-transparent"
                      onClick={() => {
                        handleModal();
                        handleSingleData(data._id);
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

          {/* -------------------modal------------------- */}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="card lg:card-side bg-base-100">
                <figure className="w-1/2">
                  <img src={medicine.product_image} alt="Album" />
                </figure>
                <div className="card-body w-1/2">
                  <h2 className="card-title text-4xl">{medicine.title}</h2>
                  <p>{medicine.description}</p>
                </div>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modNo Rooms Available In This Category!al */}
                  <button className="btn btn-success">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ) : (
        <NotAvaliable></NotAvaliable>
      )}
    </>
  );
};

export default CatagoryDetails;
