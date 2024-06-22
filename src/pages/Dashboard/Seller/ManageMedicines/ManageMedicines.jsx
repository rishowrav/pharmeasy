import { useState } from "react";
import AddMedicines from "./AddMedicines";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { upload_image_url } from "../../../../api/utils";
import useAuth from "../../../../Hooks/useAuth";
import NotAvaliable from "../../../../components/NotAvailable/NotAvaliable";
import { Helmet } from "react-helmet-async";

const ManageMedicines = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const [insertedId, setInsertedId] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // save medicine data to mongoDB
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (medicineData) => {
      const { data } = await axiosSecure.post("/add_medicine", medicineData);
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success("added medicine");
        console.log(data);
        setInsertedId(false);
        setIsAnimate(false);
        setIsOpen(false);
        refetch();
      }
    },
  });

  // delete medicine data to mongoDB
  const { mutateAsync: getId } = useMutation({
    mutationFn: async (id) => {
      const { data } = axiosSecure.delete(`/medicine_delete/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      console.log(data);
      toast.success("Deleted");
      refetch();
    },
  });

  // react form hook
  const onSubmit = async (data) => {
    setIsAnimate(true);
    // upload image in imgBB
    const formData = new FormData();
    formData.append("image", data.image_url[0]);
    const image_url = await upload_image_url(formData);

    data.image_url = await image_url;
    data.author = await {
      email: user?.email,
      name: user?.displayName,
      photo_url: user?.photoURL,
    };

    console.table(data);

    // send data
    await mutateAsync(data);
  };

  // get all users data
  const {
    data: medicines = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicines", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/medicines/${user?.email}`);
      return data;
    },
  });

  // handle delete
  const handleDelete = (id) => {
    getId(id);
    refetch();
  };

  // isLoaidng
  if (isLoading) {
    return <p className="text-6xl font-bold text-center">Loading data ...</p>;
  }

  return (
    <div>
      {" "}
      <Helmet>
        <title>PharmEasy | Manage Medicines</title>
      </Helmet>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Manage Medicines
        </h2>
        <hr className="w-96 mx-auto mt-2 mb-4" />
      </div>
      {/* Add Medicines Modal */}
      <div className="flex justify-end mr-10 mb-6">
        <button
          className="btn bg-green-700 rounded-full px-6 text-white "
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Medicines
        </button>
      </div>
      {/*Update Medicines Modal */}
      <AddMedicines
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        onSubmit={onSubmit}
        isPending={isPending}
        insertedId={insertedId}
        setInsertedId={setInsertedId}
        isLoading={isLoading}
        isAnimate={isAnimate}
      />
      {medicines.length ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Image</th>
              <th>Medicine Name</th>
              <th>Description</th>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {medicines.map((medicine, i) => (
              <tr key={medicine?._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-32 h-32">
                        <img
                          src={medicine?.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{medicine.medicineName}</td>
                <td className="space-x-2">
                  <p>{medicine?.description + " " + medicine?.author?.email}</p>
                </td>

                <td className="">
                  <button
                    onClick={() => handleDelete(medicine?._id)}
                    className="btn btn-sm bg-red-700 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotAvaliable subHeading={"Add new Medicine"} />
      )}
    </div>
  );
};

export default ManageMedicines;
