import { useQuery } from "@tanstack/react-query";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: totalSales = {} } = useQuery({
    queryKey: ["totalSales"],
    queryFn: async () => {
      const { data } = await axiosSecure("/paymentForAdmin");
      return data;
    },
  });

  console.log(totalSales);

  return (
    <div>
      <h2 className="text-4xl text-center mt-6  font-bold"> Admin Home</h2>
      <hr className="w-96 mx-auto mt-2 mb-4" />
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-[#009432] text-white">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#006266]">
              <RiMoneyDollarCircleFill className="text-6xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-5xl font-bold leading-none">
                ${totalSales?.totalSales}
              </p>
              <p className="capitalize font-semibold mt-2">
                Total Sales Revenue
              </p>
            </div>
          </div>

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-[#009432] text-white">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#006266]">
              <RiMoneyDollarCircleFill className="text-6xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-5xl font-bold leading-none">
                ${totalSales?.totalSales}
              </p>
              <p className="capitalize font-semibold mt-2">Paid Total</p>
            </div>
          </div>

          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-[#009432] text-white">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#006266]">
              <RiMoneyDollarCircleFill className="text-6xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-5xl font-bold leading-none">$00</p>
              <p className="capitalize font-semibold mt-2">Pending Total</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
