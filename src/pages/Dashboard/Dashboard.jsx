import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <DashboardSidebar></DashboardSidebar>
      <div className="min-w-[calc(100vw-240px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
