import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const ManageBannerAdvertise = () => {
  const axiosSecure = useAxiosSecure();
  const [toggle, setToggle] = useState(false);

  // get all advertise data from db
  const { data: advertise = [], refetch } = useQuery({
    queryKey: ["advertiseAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/advertise");
      return data;
    },
  });

  // update status

  const { mutateAsync } = useMutation({
    mutationFn: async (status) => {
      const { data } = await axiosSecure.put("advertise_status_update", status);
      return data;
    },

    onSuccess: (data) => {
      if (data.modifiedCount) {
        console.log(data);
        toast.success("Status Updated");
        refetch();
      }
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Manage Banner Advertise
        </h2>
        <hr className="w-80 mx-auto mt-2 mb-4" />
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Image</th>
            <th>Medicine Name</th>
            <th>Description</th>
            <td>Seller Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {advertise.map((data, i) => (
            <tr key={data._id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                      <img
                        src={data?.image_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{data?.medicine_name}</td>
              <td className="space-x-2">
                <p>{data.descriptionText.slice(0, 50)}...</p>
              </td>
              <td>{data?.author?.email}</td>
              <td>
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    mutateAsync({
                      status: `${
                        toggle ? "Add to Slide" : "Remove from Slide"
                      }`,
                      id: data?._id,
                    });
                  }}
                  className={`btn btn-sm ${
                    data?.status === "Add to Slide"
                      ? "bg-red-700 hover:bg-red-700"
                      : "bg-green-700 hover:bg-green-700"
                  }  text-white `}
                >
                  {data?.status === "Remove from Slide"
                    ? "Add to Slide"
                    : "Remove from Slide"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBannerAdvertise;
