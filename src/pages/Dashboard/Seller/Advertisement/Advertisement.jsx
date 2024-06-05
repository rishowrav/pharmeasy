const Advertisement = () => {
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
          onClick={() => document.getElementById("add_advertise").showModal()}
        >
          Add Advertise
        </button>
        <dialog id="add_advertise" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* Medicine Name */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Medicine Name</span>
                </div>
                <input
                  name="medicineName"
                  type="text"
                  placeholder="Category Name"
                  className="input input-bordered w-full "
                />
              </label>

              {/* Image URL */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  name="genericName"
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered w-full "
                />
              </label>

              {/* Description */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Bio"
                ></textarea>
              </label>

              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-full btn-success  mt-4">
                Add Advertise
              </button>
            </form>
          </div>
        </dialog>
      </div>

      {/*Update Advertise Modal */}
      <dialog id="update_advertise" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* Medicine Name */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Medicine Name</span>
              </div>
              <input
                name="medicineName"
                type="text"
                placeholder="Category Name"
                className="input input-bordered w-full "
              />
            </label>

            {/* Image URL */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                name="genericName"
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full "
              />
            </label>

            {/* Description */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>

            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full btn-success  mt-4">
              Update Advertise
            </button>
          </form>
        </div>
      </dialog>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Image</th>
            <th>Medicine Name</th>
            <th>Description</th>
            <td>Action</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32">
                    <img
                      src="../../../../../public/images/slide4.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td className="space-x-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis odio repellendus culpa illo quidem a facilis corporis
                iusto fugit hic...
              </p>
            </td>
            <td className="">
              <button
                onClick={() =>
                  document.getElementById("update_advertise").showModal()
                }
                className="btn btn-sm bg-yellow-700 text-white"
              >
                Update
              </button>
            </td>
            <td className="">
              <button className="btn btn-sm bg-red-700 text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Advertisement;
