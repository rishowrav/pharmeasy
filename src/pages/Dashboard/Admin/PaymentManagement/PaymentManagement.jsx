import { Helmet } from "react-helmet-async";

const PaymentManagement = () => {
  return (
    <div>
      <Helmet>
        <title>PharmEasy | Payment Management</title>
      </Helmet>
      <h2 className="text-4xl text-center mt-6  font-bold">
        {" "}
        Payment Management
      </h2>
      <hr className="w-[30rem] mx-auto mt-2 mb-4" />
    </div>
  );
};

export default PaymentManagement;
