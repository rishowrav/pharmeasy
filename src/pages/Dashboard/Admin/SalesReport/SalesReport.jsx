import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const SalesReport = () => {
  const axiosSecure = useAxiosSecure();

  const { data: salseReport = [{}] } = useQuery({
    queryKey: ["salesReport"],
    queryFn: async () => {
      const { data } = await axiosSecure("/salseReport");
      return data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mt-6  font-bold"> Sales Report</h2>
        <hr className="w-80 mx-auto mt-2 mb-4" />
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Medicine Name</th>
            <th>Seller Email</th>
            <th>Buyer Email</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {salseReport.map((sr, ind) => (
            <tr>
              <td>{ind + 1}</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>example@gmail.com</td>
              <td>{sr?.buyerInfo?.email}</td>
              <th>${sr?.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
