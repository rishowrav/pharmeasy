import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddMedicines = ({ onSubmit, isOpen, setIsOpen, isPending }) => {
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 z-50 bg-black/30 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-screen-md rounded-xl bg-white p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-black"
                  >
                    Payment successful
                  </DialogTitle>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Medicine Name */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Medicine Name</span>
                        </div>
                        <input
                          {...register("medicineName", { required: true })}
                          name="medicineName"
                          type="text"
                          placeholder="Category Name"
                          className="input input-bordered w-full "
                        />
                        {errors.medicineName && (
                          <span className="text-xs text-red-600">
                            This field is required
                          </span>
                        )}
                      </label>

                      {/* Generic Name */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Generic Name</span>
                        </div>
                        <input
                          {...register("genericName", { required: true })}
                          type="text"
                          placeholder=" Generic Name"
                          className="input input-bordered w-full "
                        />

                        {errors.genericName && (
                          <span className="text-xs text-red-600">
                            This field is required
                          </span>
                        )}
                      </label>
                    </div>

                    {/* preview image */}
                    {imageUrl && (
                      <div className="mt-4 border border-gray-400   rounded-lg  overflow-hidden">
                        <img
                          className="object-cover w-full h-72"
                          src={imageUrl}
                        />
                      </div>
                    )}

                    {/* Image URL */}
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Image URL</span>
                      </div>

                      <input
                        required
                        type="file"
                        {...register("image_url")}
                        onChange={(e) =>
                          setImageUrl(URL.createObjectURL(e.target.files[0]))
                        }
                        className="file-input file-input-bordered w-full"
                      />
                      {!imageUrl && (
                        <span className="text-xs text-red-600">
                          This field is required
                        </span>
                      )}
                    </label>

                    {/* Description */}
                    <label className="form-control">
                      <div className="label">
                        <span className="label-text">Description</span>
                      </div>
                      <textarea
                        {...register("description", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Bio"
                      ></textarea>
                      {errors.description && (
                        <span className="text-xs text-red-600">
                          This field is required
                        </span>
                      )}
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {/* Select Category */}
                      <label
                        htmlFor="category"
                        className="form-control w-full "
                      >
                        <select
                          className="select select-bordered"
                          id="category"
                          {...register("category", {
                            required: "This field is required",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Category
                          </option>
                          <option value="Tablet">Tablet</option>
                          <option value="Capsule">Capsule</option>
                          <option value="Injection">Injection</option>
                          <option value="Antivirals">Antivirals</option>
                          <option value="Syrup">Syrup</option>
                          <option value="Analgesics">Analgesics</option>
                        </select>
                        {errors.category && (
                          <span className="text-xs text-red-600">
                            {errors.category.message}
                          </span>
                        )}
                      </label>

                      {/* Select Company */}
                      <label className="form-control w-full ">
                        <select
                          {...register("company", {
                            required: "This field is required",
                          })}
                          className="select select-bordered"
                        >
                          <option value="" disabled selected>
                            Select Company
                          </option>
                          <option value="Pfizer Inc.">Pfizer Inc.</option>
                          <option value="Johnson & Johnson">
                            Johnson & Johnson
                          </option>
                          <option value="Roche Holding AG">
                            Roche Holding AG
                          </option>
                          <option value="Novartis International AG">
                            Novartis International AG
                          </option>
                          <option value="Merck & Co., Inc.">
                            Merck & Co., Inc.
                          </option>
                        </select>
                        {errors.company && (
                          <span className="text-xs text-red-600">
                            {errors.company.message}
                          </span>
                        )}
                      </label>

                      {/* Available status  */}
                      <label className="form-control w-full ">
                        <select
                          {...register("available_status", {
                            required: "This field is required",
                          })}
                          className="select select-bordered"
                        >
                          <option value="" disabled selected>
                            Select Status
                          </option>
                          <option value="Available">Available</option>
                          <option value="Not Available">Not Available</option>
                        </select>
                        {errors.available_status && (
                          <span className="text-xs text-red-600">
                            {errors.available_status.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Item mass Unit (Mg or ML) */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Item mass Unit</span>
                        </div>
                        <select
                          {...register("item_mass_unit", {
                            required: "This field is required",
                          })}
                          className="select select-bordered"
                        >
                          <option value="" disabled selected>
                            Select Unit
                          </option>
                          <option value="Mg">Mg</option>
                          <option value="ML">ML</option>
                        </select>
                        {errors.item_mass_unit && (
                          <span className="text-xs text-red-600">
                            {errors.available_status.message}
                          </span>
                        )}
                      </label>

                      {/* Price) */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Price</span>
                        </div>
                        <input
                          {...register("price", { required: true })}
                          type="number"
                          placeholder="Price"
                          className="input input-bordered w-full "
                        />
                        {errors.price && (
                          <span className="text-xs text-red-600">
                            This field is required
                          </span>
                        )}
                      </label>

                      {/* Discount ) */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Discount</span>
                        </div>
                        <input
                          {...register("discount", { required: true })}
                          type="number"
                          placeholder="Discount"
                          className="input input-bordered w-full "
                          defaultValue={0}
                        />
                        {errors.discount && (
                          <span className="text-xs text-red-600">
                            This field is required
                          </span>
                        )}
                      </label>
                    </div>
                    {/* if there is a button in form, it will close the modal */}
                    <button
                      className="btn w-full btn-success mt-4"
                      onClick={async () => {
                        if (
                          errors?.medicineName ||
                          errors?.genericName ||
                          errors?.image_url ||
                          errors?.description ||
                          errors?.item_mass_unit ||
                          errors?.price ||
                          errors?.discount ||
                          errors?.category ||
                          errors?.company ||
                          errors?.available_status ||
                          !imageUrl
                        ) {
                          setIsOpen(true);
                        } else {
                          setIsOpen(false);
                          setImageUrl("");
                        }
                      }}
                    >
                      {!isPending ? (
                        "Add Medicines"
                      ) : (
                        <span className="animate-spin">|</span>
                      )}
                    </button>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

AddMedicines.propTypes = {
  isOpen: PropTypes.bool,
  isPending: PropTypes.bool,
  isLoading: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  setInsertedId: PropTypes.func,
  insertedId: PropTypes.string,
};

export default AddMedicines;
