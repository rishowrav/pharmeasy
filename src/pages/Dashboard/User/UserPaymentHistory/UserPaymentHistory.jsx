import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UserPaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistorys = [] } = useQuery({
    queryKey: ["UserPaymentHistory"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payment/${user?.email}`);
      return data;
    },
  });

  console.log(paymentHistorys);

  return (
    <div>
      {" "}
      <Helmet>
        <title>PharmEasy | Payment History</title>
      </Helmet>
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
              <th>Transaction Id</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistorys.map((ph, ind) => (
              <tr>
                <th>{ind + 1}</th>
                <td>{ph?.transactionId}</td>
                <td>${ph?.price}</td>
                <td>
                  <button className="btn btn-sm btn-success">Paid</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
