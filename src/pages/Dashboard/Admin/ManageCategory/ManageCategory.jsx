import avatar from "../../../../../public/images/slide2.png";

const ManageCategory = () => {
  const handleCategory = (e) => {
    const form = e.target;
    const cName = form.cName.value;
    const iURL = form.iURL.value;

    console.table({ cName, iURL });
  };

  return (
    <div>
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
          onClick={() => document.getElementById("add_category").showModal()}
        >
          Add Category
        </button>

        <dialog
          id="add_category"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="">
              <form method="dialog" onSubmit={handleCategory}>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Category Name</span>
                  </div>
                  <input
                    name="cName"
                    type="text"
                    placeholder="Category Name"
                    className="input input-bordered w-full "
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Image URL</span>
                  </div>
                  <input
                    name="iURL"
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full "
                  />
                </label>

                {/* if there is a button in form, it will close the modal */}
                <button className="btn w-full btn-success  mt-4">
                  Add Category
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* Update Categor Modal */}
      <div className="flex justify-end mr-10">
        <dialog
          id="update_category"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="">
              <form method="dialog" onSubmit={handleCategory}>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Category Name</span>
                  </div>
                  <input
                    name="cName"
                    type="text"
                    placeholder="Category Name"
                    className="input input-bordered w-full "
                  />
                </label>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Image URL</span>
                  </div>
                  <input
                    name="iURL"
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full "
                  />
                </label>

                {/* if there is a button in form, it will close the modal */}
                <button className="btn w-full btn-success  mt-4">
                  Update Category
                </button>
              </form>
            </div>
          </div>
        </dialog>
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
          <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32">
                    <img src={avatar} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet.</td>
            <td className="space-x-2">
              <button
                onClick={() =>
                  document.getElementById("update_category").showModal()
                }
                type="submit"
                className="btn btn-sm bg-green-700 text-white"
              >
                Update
              </button>
              <button
                type="submit"
                className="btn btn-sm bg-red-600 text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageCategory;
