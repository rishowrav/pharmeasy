const ManageBannerAdvertise = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Manage Banner Advertise
        </h2>
        <hr className="w-80 mx-auto mt-2 mb-4" />
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Image</th>
            <th>Medicine Name</th>
            <th>Description</th>
            <td>Seller Email</td>
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
                      src="../../../../../public/images/slide3.png"
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
            <td>example@gmail.com</td>
            <td>
              <button className="btn btn-sm bg-green-700 text-white">
                Approve
              </button>
            </td>
          </tr>
          {/* row 2 */}
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
            <td>example@gmail.com</td>
            <td>
              <button className="btn btn-sm bg-yellow-700 text-white">
                Pending
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageBannerAdvertise;
