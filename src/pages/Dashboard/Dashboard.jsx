import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useRole from "../../Hooks/useRole";
import AdminHome from "./Admin/AdminHome/AdminHome";

const Dashboard = () => {
  const [role] = useRole();

  return <div>{role === "Admin" && <AdminHome />}</div>;
};

export default Dashboard;
