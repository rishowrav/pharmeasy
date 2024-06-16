import { Dialog, DialogPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { upload_image_url } from "../../api/utils";
import { useState } from "react";

const AddAdvertiseModal = ({ isOpen, setIsOpen, refetch }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // save advertise data to mongoDB
  const { mutateAsync } = useMutation({
    mutationFn: async (advertise) => {
      const { data } = await axiosSecure.post("/advertise", advertise);
      return data;
    },
    onSuccess: (data) => {
      if (data?.insertedId) {
        console.log(data);
        toast.success("Saved advertise");
        setIsOpen(false);
        setIsAnimate(false);
        setPreviewImage("");
        refetch();
      }
    },
  });

  // handle add advertise button function
  const handleAddAdvertise = async (e) => {
    setIsAnimate(true);
    e.preventDefault();

    const form = e.target;
    const medicine_name = form.medicineName.value;
    const descriptionText = form.description.value;

    const formData = new FormData();
    formData.append("image", form.image_url.files[0]);

    const image_url = await upload_image_url(formData);

    const advertise = await {
      medicine_name,
      image_url,
      descriptionText,
      status: "Remove from Slide",
      author: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    console.table(advertise);

    await mutateAsync(advertise);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        setPreviewImage("");
      }}
      className="relative z-50 "
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30 ">
        <DialogPanel className=" space-y-4 border   rounded-xl p-4 shadow-2xl bg-white">
          <form
            onSubmit={handleAddAdvertise}
            className="bg-base-100  w-[700px]"
          >
            {/* Medicine Name */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Medicine Name</span>
              </div>
              <input
                required
                name="medicineName"
                type="text"
                placeholder="Medicine Name"
                className="input input-bordered w-full "
              />
            </label>
            {previewImage && (
              <figure className="h-[200px] mt-4">
                <img
                  className="w-full h-full object-contain"
                  src={previewImage}
                  alt=""
                />
              </figure>
            )}

            {/* Image URL */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                onChange={(e) =>
                  setPreviewImage(URL.createObjectURL(e.target.files[0]))
                }
                required
                name="image_url"
                type="file"
                className="file-input file-input-bordered w-full "
              />
            </label>

            {/* Description */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                required
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="..."
              ></textarea>
            </label>

            {/* if there is a button in form, it will close the modal */}
            <button
              disabled={isAnimate}
              className="btn w-full btn-success disabled:cursor-not-allowed disabled:bg-gray-400  mt-4"
            >
              {!isAnimate ? (
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

AddAdvertiseModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  refetch: PropTypes.func,
};

export default AddAdvertiseModal;
