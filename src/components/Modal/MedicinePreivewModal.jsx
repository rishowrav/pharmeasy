import { Dialog, DialogPanel } from "@headlessui/react";
import PropTypes from "prop-types";

const MedicinePreivewModal = ({ isOpen, setIsOpen, singleMedicine }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0  bg-black/30 flex w-screen items-center justify-center ">
          <DialogPanel className=" space-y-4 border   rounded-xl">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-96"
                  src={singleMedicine.image_url}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleMedicine.medicineName}</h2>
                <p>
                  <span className="font-semibold">Description: </span>
                  {singleMedicine.description}
                </p>
                <ul>
                  <li>
                    <span className="font-semibold">Available Status:</span>{" "}
                    {singleMedicine.available_status}
                  </li>
                  <li>
                    <span className="font-semibold">Category:</span>{" "}
                    {singleMedicine.category}
                  </li>
                  <li>
                    <span className="font-semibold">Company:</span>{" "}
                    {singleMedicine.company}
                  </li>
                  <li>
                    <span className="font-semibold">Discount:</span>{" "}
                    {singleMedicine.discount}%
                  </li>
                  <li>
                    <span className="font-semibold">Generic Name:</span>{" "}
                    {singleMedicine.genericName}
                  </li>
                  <li>
                    <span className="font-semibold">Item Mass Unit:</span>{" "}
                    {singleMedicine.item_mass_unit}
                  </li>
                  <li>
                    <span className="font-semibold">Price:</span> $
                    {singleMedicine.price}
                  </li>
                </ul>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-primary"
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

MedicinePreivewModal.propTypes = {
  isOpen: PropTypes.bool,
  singleMedicine: PropTypes.object,
  setIsOpen: PropTypes.func,
};

export default MedicinePreivewModal;
