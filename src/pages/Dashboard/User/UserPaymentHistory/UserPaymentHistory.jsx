const UserPaymentHistory = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold">
          {" "}
          Payment History
        </h2>
        <hr className="w-96 mx-auto mt-2 mb-4" />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Example@gmail.com</td>
              <td>sdfasdfasdf</td>
              <td>$78</td>
              <td>
                <button className="btn btn-sm btn-success">Paid</button>
              </td>
            </tr>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Example@gmail.com</td>
              <td>asfasdfasdf</td>
              <td>$45</td>
              <td>
                <button className="btn btn-sm btn-warning">Pending</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
