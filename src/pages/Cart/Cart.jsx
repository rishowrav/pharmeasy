import { FaMinus, FaPlus } from "react-icons/fa";
import product from "../../../public/images/slide1.png";

const Cart = () => {
  return (
    <div className="container mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 "
                  src={product}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        Polaroid camera
                      </h3>
                      <p className="text-sm dark:text-gray-600">Classic</p>
                    </div>
                  </div>

                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex text-red-600 items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="join">
                <button className="join-item btn  bg-base-100">
                  <FaMinus />
                </button>
                <button className="join-item px-8 btn hover:bg-base-100 bg-base-100">
                  <span className="font-bold text-lg">1</span>
                </button>
                <button className="join-item btn  bg-base-100">
                  <FaPlus />
                </button>
              </div>
            </td>

            <th>
              <span className="text-2xl">$49.99</span>
            </th>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-col  p-6 space-y-4 sm:p-10 ">
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold"> $357 </span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-full dark:border-red-600"
          >
            Clear All
          </button>
          <button
            type="button"
            className="px-6 py-2 border rounded-full bg-green-700 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
