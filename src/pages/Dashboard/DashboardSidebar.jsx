import { Link, NavLink } from "react-router-dom";
import { PiMoneyWavyThin, PiUsersLight } from "react-icons/pi";
import { MdOutlineCategory } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import avatar from "../../../public/images/avatar.png";
import { RiAdvertisementFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";

const DashboardSidebar = () => {
  const user = "user";

  return (
    <div className="h-screen p-3 fixed left-0 z-50 top-0 space-y-2 w-60 bg-[linear-gradient(-45deg,#00800059,#00800059)]">
      <div className="flex items-center p-2 space-x-4">
        <img
          src={avatar}
          alt=""
          className="w-12 h-12 rounded-full bg-base-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-xs hover:underline dark:text-gray-600"
            >
              {user === "admin"
                ? "Admin"
                : user === "seller"
                ? "Seller"
                : "User"}
            </a>
          </span>
        </div>
      </div>
      <div className="divide-y dark:divide-gray-300">
        {/* Admin Menu */}
        {user === "admin" && (
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {/* <li className="dark:bg-gray-100 dark:text-gray-900">
              <NavLink
                to="/dashboard"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-600"
                >
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Dashboard</span>
              </NavLink>
            </li> */}

            <li className="rounded-sm">
              <NavLink
                to="adminHome"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-600"
                >
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <span>Admin Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manageUsers"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <PiUsersLight className="text-xl" />
                <span>Manage Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manageCategory"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <MdOutlineCategory className="text-xl" />
                <span>Manage Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="paymentManagement"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <PiMoneyWavyThin className="text-xl" />
                <span>Payment Management</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="salesReport"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <TbReportMoney className="text-xl" />
                <span>Sales Report</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="manageBannerAdvertise"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <RiAdvertisementFill className="text-xl" />
                <span>Manage Banner Advertise</span>
              </NavLink>
            </li>
          </ul>
        )}

        {/* Seller Menu */}
        {user === "seller" && (
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <NavLink
                to="sellerHome"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current dark:text-gray-600"
                >
                  <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                </svg>
                <span>Seller Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="manageMedicines"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <MdOutlineCategory className="text-xl" />
                <span>Manage Medicines</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="paymentHistory"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <PiMoneyWavyThin className="text-xl" />
                <span>Payment History</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="advertisement"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <RiAdvertisementFill className="text-xl" />
                <span>Advertisement</span>
              </NavLink>
            </li>
          </ul>
        )}

        {/* User Menu */}
        {user === "user" && (
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li>
              <NavLink
                to="userPaymentHistory"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <PiMoneyWavyThin className="text-xl" />
                <span>Payment History</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="myQuery"
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <DiJqueryLogo className="text-xl" />
                <span>My Query</span>
              </NavLink>
            </li>
          </ul>
        )}

        <ul className="pt-4 pb-2 space-y-1 text-sm">
          <li>
            <a
              href="#"
              rel="noopener noreferrer"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current dark:text-gray-600"
              >
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex  items-end p-2 space-x-3 text-sm h-[calc(100vh-460px)]">
        <span className=" flex items-center gap-1">
          <HiMiniArrowLeftEndOnRectangle className="text-xl" />
          <Link to="/">Back to Home</Link>
        </span>
      </div>
    </div>
  );
};

export default DashboardSidebar;
