import { useState } from "react";

import AddCategoryModal from "../../../../components/Modal/AddCategoryModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ManageCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  // get all category data
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categoriesList"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/categories");
      return data;
    },
  });

  // delete category data
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/category/${id}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount) {
        toast.success("Deleted Category");
        refetch();
      }
    },
  });

  return (
    <div>
      {" "}
      <Helmet>
        <title>PharmEasy | Manage Category</title>
      </Helmet>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Manage Category
        </h2>
        <hr className="w-96 mx-auto mt-2 mb-4" />
      </div>
      {/* Add Categor Modal */}
      <div className="flex justify-end mr-10">
        <button
          className="btn bg-green-700 rounded-full px-6 text-white "
          onClick={() => setIsOpen(true)}
        >
          Add Category
        </button>

        <AddCategoryModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          refetch={refetch}
        />
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {categories.map((category, ind) => (
            <tr key={category._id}>
              <td>{ind + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-32 h-32">
                      <img
                        src={category?.image_url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{category?.category_name}</td>
              <td className="space-x-2">
                <button
                  onClick={() => mutateAsync(category?._id)}
                  type="submit"
                  className="btn btn-sm bg-red-600 text-white"
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

export default ManageCategory;
