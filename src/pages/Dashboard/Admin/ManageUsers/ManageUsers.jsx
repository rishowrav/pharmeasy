import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  // get all user data
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  // update user role
  const { mutateAsync } = useMutation({
    mutationFn: async (userRole) => {
      const { data } = await axiosSecure.put("/userRoleUpdate", userRole);
      return data;
    },
    onSuccess: (data) => {
      if (data.modifiedCount) {
        toast.success("updated");
        refetch();
      }
    },
  });

  const handleRoleUpdate = (e, id) => {
    e.preventDefault();
    const role = e.target.role.value;
    mutateAsync({ role, id });
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold"> Manage Users</h2>
        <hr className="w-80 mx-auto mt-2 mb-4" />
      </div>
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
          {users.map((user, index) => (
            <tr key={user?._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user?.photoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user?.displayName}</div>
                    <div className="text-sm opacity-50">{user?.role}</div>
                  </div>
                </div>
              </td>
              <td>{user?.email}</td>
              <td>
                <form
                  onSubmit={(e) => handleRoleUpdate(e, user?._id)}
                  className="flex items-center gap-2"
                >
                  <select
                    name="role"
                    defaultValue={user?.role}
                    className="select select-sm w-40 select-bordered"
                  >
                    <option value="" disabled selected>
                      Select Role
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Seller">Seller</option>
                    <option value="User">User</option>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
