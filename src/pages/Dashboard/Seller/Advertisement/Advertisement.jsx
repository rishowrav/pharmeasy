import { useState } from "react";
import AddAdvertiseModal from "../../../../components/Modal/AddAdvertiseModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Advertisement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // get advertise data
  const { data: advertise = [], refetch } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/advertise/${user?.email}`);
      return data;
    },
  });

  // handle Delete advertise
  const { mutateAsync: getId } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/advertise/${id}`);
      return data;
    },
    onSuccess: async (data) => {
      if (data?.deletedCount) {
        toast.success("Deleted Data");
        refetch();
      }
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold"> Advertisement</h2>
        <hr className="w-96 mx-auto mt-2 mb-4" />
      </div>

      {/* Add Advertise Modal */}
      <div className="flex justify-end mr-10 mb-6">
        <button
          className="btn bg-green-700 rounded-full px-6 text-white "
          onClick={() => setIsOpen(true)}
        >
          Add Advertise
        </button>

        <AddAdvertiseModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          refetch={refetch}
        />
      </div>

      {/* ---------------------------------------------------------------------------------- */}

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
          {advertise.map((data, index) => (
            <tr key={data._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                      <img
                        src={data.image_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{data.medicine_name}</td>
              <td className="space-x-2">
                <p>{data.descriptionText.slice(0, 50)}...</p>
              </td>

              <td className="">
                <button
                  onClick={() => getId(data?._id)}
                  className="btn btn-sm bg-red-700 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Advertisement;
