const MyQuery = () => {
  return (
    <div>
      <div>
        <div>
          <h2 className="text-4xl text-center mt-6  font-bold"> My Query</h2>
          <hr className="w-96 mx-auto mt-2 mb-4" />
        </div>

        {/* Add Advertise Modal */}
        <div className="flex justify-end mr-10 mb-6">
          <button
            className="btn bg-green-700 rounded-full px-6 text-white "
            onClick={() => document.getElementById("MyQuery").showModal()}
          >
            Add Query
          </button>
          <dialog id="MyQuery" className="modal">
            <div className="modal-box">
              <form method="dialog">
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
                  Add Query
                </button>
              </form>
            </div>
          </dialog>
        </div>

        {/*Update Query Modal */}
        <dialog id="update_Query" className="modal">
          <div className="modal-box ">
            <form method="dialog">
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
                Update Query
              </button>
            </form>
          </div>
        </dialog>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Your Query Description</th>
              <td>Action</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>

              <td className="space-x-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis odio repellendus culpa illo quidem a facilis
                  corporis iusto fugit hic...
                </p>
              </td>
              <td className="">
                <button
                  onClick={() =>
                    document.getElementById("update_Query").showModal()
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
    </div>
  );
};

export default MyQuery;
