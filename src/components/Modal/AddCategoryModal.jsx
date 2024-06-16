import { Dialog, DialogPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import { upload_image_url } from "../../api/utils";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { ImSpinner9 } from "react-icons/im";

const AddCategoryModal = ({ isOpen, setIsOpen, refetch }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (category) => {
      const { data } = await axiosSecure.post("/category", category);
      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success("Saved Category");
        setIsLoading(false);
        setIsOpen(false);
        refetch();
      }
    },
  });

  const handleSubmit = async (e) => {
    setIsLoading(true);
    const form = e.target;
    const category_name = form.category.value;

    const formData = new FormData();
    formData.append("image", form.photoURL.files[0]);
    const image_url = await upload_image_url(formData);

    await mutateAsync({ category_name, image_url });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30 ">
        <DialogPanel className=" space-y-4 border w-[600px]  rounded-xl p-4 shadow-2xl bg-white">
          <form method="dialog" onSubmit={handleSubmit}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category Name</span>
              </div>
              <input
                name="category"
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full "
              />
            </label>
            {imagePreview && (
              <figure className="w-full">
                <img
                  className="h-[200px] object-contain w-full"
                  src={imagePreview}
                  alt=""
                />
              </figure>
            )}

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>

              <input
                onChange={(e) =>
                  setImagePreview(URL.createObjectURL(e.target.files[0]))
                }
                name="photoURL"
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>

            {/* if there is a button in form, it will close the modal */}
            <button
              disabled={isLoading}
              className="btn w-full btn-success disabled:cursor-not-allowed disabled:bg-gray-400  mt-4"
            >
              {!isLoading ? (
                "Add Advertise"
              ) : (
                <ImSpinner9 className="text-2xl animate-spin text-white" />
              )}
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

AddCategoryModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  refetch: PropTypes.func,
};

export default AddCategoryModal;
