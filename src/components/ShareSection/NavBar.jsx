import Logo from "../../../public/images/logo_big.svg";
import Avatar from "../../../public/images/avatar.png";
import { FaCaretDown } from "react-icons/fa";

import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  if (theme) {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
  }

  const links = (
    <>
      <li className="text-sm font-normal text-base-400 ">
        <NavLink to="/">Home</NavLink>
      </li>{" "}
      <li className="text-sm font-normal text-base-400 ">
        <NavLink to="/shop">Shop</NavLink>
      </li>{" "}
      <li className="text-sm font-normal text-base-400 ">
        <NavLink to="/cart">
          <IoCartOutline className="text-xl"></IoCartOutline> Cart
        </NavLink>
      </li>
      <li className="text-sm font-normal text-base-400 ">
        <Link>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center  gap-1"
            >
              <span>Language</span> <FaCaretDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Bangla</a>
              </li>
            </ul>
          </div>
        </Link>
      </li>
    </>
  );

  const handleLogOut = async () => {
    try {
      const result = await logOut();

      console.log(result);
      toast.success("Successfully LogOut");
      navigate("/login");
    } catch (er) {
      console.log(er);
      toast.success(er.message);
    }
  };

  return (
    <div className="shadow-sm">
      <div
        className="navbar bg-base-100 py-4 container mx-auto"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-xl lg:hidden bg-[linear-gradient(45deg,#FF6F61,#9656A1B3)] text-white mr-2 hover:bg-[#E35353]"
            >
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl pl-0 w-[150px] hover:bg-transparent"
          >
            <img className="" src={Logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal text-[16px] font-bold ">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          {/* if user login or not login */}

          {user && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-green-700 btn-ghost btn-circle avatar z-[999]"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL || Avatar}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm space-y-1 dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="my_submitted_assignment">Update Profile</Link>
                  </li>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm text-white bg-green-700 border-none "
                    >
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </>
          )}

          {!user && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn rounded-full px-6  text-white bg-green-700"
                >
                  JOIN US
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                >
                  <li>
                    <Link to="/login" className="btn btn-sm ">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="btn btn-sm  ">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* theme dark light */}
          <label className="cursor-pointer grid place-items-center">
            <input
              onClick={() => setTheme(!theme)}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
