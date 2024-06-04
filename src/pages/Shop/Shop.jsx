import product from "../../../public/images/slide1.png";
import { FaRegEye } from "react-icons/fa";

const Shop = () => {
  return (
    <div className="overflow-x-auto container mx-auto  border-x border-base-200 border-t mt-4">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Image</th>
            <th>Name of Product</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                select
              </button>
            </td>
            <th>
              <button
                className="btn btn-ghost btn-xs hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                {" "}
                <FaRegEye className="text-2xl" />
              </button>
            </th>
          </tr>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                select
              </button>
            </td>
            <th>
              <button
                className="btn btn-ghost btn-xs hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                {" "}
                <FaRegEye className="text-2xl" />
              </button>
            </th>
          </tr>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                select
              </button>
            </td>
            <th>
              <button
                className="btn btn-ghost btn-xs hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                {" "}
                <FaRegEye className="text-2xl" />
              </button>
            </th>
          </tr>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                select
              </button>
            </td>
            <th>
              <button
                className="btn btn-ghost btn-xs hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                {" "}
                <FaRegEye className="text-2xl" />
              </button>
            </th>
          </tr>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white rounded-full px-4">
                select
              </button>
            </td>
            <th>
              <button
                className="btn btn-ghost btn-xs hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                {" "}
                <FaRegEye className="text-2xl" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>

      {/* -------------------modal------------------- */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <div className="card  bg-base-100 ">
            <figure className="">
              <img src={product} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body pt-0 items-center text-center">
              <h2 className="card-title">
                Lorem ipsum dolor sit amet consectetur.
              </h2>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Shop;
