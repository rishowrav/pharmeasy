import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardMian = () => {
  return (
    <div className="flex">
      <DashboardSidebar className=" "></DashboardSidebar>
      <div className="w-[calc(100vw-240px)] ml-[240px]  ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMian;
