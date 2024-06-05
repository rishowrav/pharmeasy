const ManageUsers = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
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
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">User</div>
                </div>
              </div>
            </td>
            <td>example@gmail.com</td>
            <td>
              <form action="" className="flex items-center gap-2">
                <select className="select select-sm w-40 select-bordered w-full ">
                  <option disabled selected>
                    Select Role
                  </option>
                  <option>Admin</option>
                  <option>Seller</option>
                  <option>User</option>
                </select>
                <button
                  type="submit"
                  className="btn btn-sm bg-green-700 text-white"
                >
                  Set Role
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
