import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const CartSingleRow = ({ cart, index, setTotal, mutateAsync }) => {
  const [count, setCount] = useState(1);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex space-x-2 sm:space-x-4">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 "
            src={cart.image_url}
            alt="Polaroid camera"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  {cart.medicineName}
                </h3>
                <p className="text-sm dark:text-gray-600">{cart.category}</p>
              </div>
            </div>

            <div className="flex text-sm divide-x">
              <button
                onClick={() => mutateAsync(cart._id)}
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
          <button
            onClick={() => setCount(count - 1)}
            className="join-item btn  bg-base-100"
          >
            <FaMinus />
          </button>
          <button className="join-item px-8 btn hover:bg-base-100 bg-base-100">
            <span className="font-bold text-lg">{count}</span>
          </button>
          <button
            onClick={() => {
              setCount(count + 1);
              setTotal(count * cart.price);
            }}
            className="join-item btn  bg-base-100"
          >
            <FaPlus />
          </button>
        </div>
      </td>

      <th>
        <span className="text-2xl">${count * cart.price}</span>
      </th>
    </tr>
  );
};

CartSingleRow.propTypes = {
  index: PropTypes.number,
  cart: PropTypes.object,
  setTotal: PropTypes.func,
  mutateAsync: PropTypes.func,
};

export default CartSingleRow;
