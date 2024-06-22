import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useRole from "../../Hooks/useRole";
import AdminHome from "./Admin/AdminHome/AdminHome";
import UserDashboard from "./User/UserDashboard";
import SellerHome from "./Seller/SellerHome/SellerHome";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [role] = useRole();

  return (
    <div>
      <Helmet>
        <title>PharmEasy | Dashboard</title>
      </Helmet>
      {role === "Admin" && <AdminHome />}
      {role === "Seller" && <SellerHome />}
      {role === "User" && <UserDashboard />}
    </div>
  );
};

export default Dashboard;
