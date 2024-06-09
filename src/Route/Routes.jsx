import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Shop from "../pages/Shop/Shop";
import CatagoryDetails from "../pages/Home/CategorySection/CatagoryDetails";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PaymentManagement from "../pages/Dashboard/Admin/PaymentManagement/PaymentManagement";
import SalesReport from "../pages/Dashboard/Admin/SalesReport/SalesReport";
import ManageCategory from "../pages/Dashboard/Admin/ManageCategory/ManageCategory";
import ManageBannerAdvertise from "../pages/Dashboard/Admin/ManageBannerAdvertise/ManageBannerAdvertise";
import SellerHome from "../pages/Dashboard/Seller/SellerHome/SellerHome";
import ManageMedicines from "../pages/Dashboard/Seller/ManageMedicines/ManageMedicines";
import PaymentHistory from "../pages/Dashboard/Seller/PaymentHistory/PaymentHistory";
import Advertisement from "../pages/Dashboard/Seller/Advertisement/Advertisement";
import UserPaymentHistory from "../pages/Dashboard/User/UserPaymentHistory/UserPaymentHistory";
import MyQuery from "../pages/Dashboard/User/MyQuery/MyQuery";
import DashboardMian from "../pages/Dashboard/DashboardMian";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/catagoryDetails/:category",
        element: (
          <PrivateRoute>
            <CatagoryDetails></CatagoryDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardMian></DashboardMian>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },

      // admin path
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageCategory",
        element: <ManageCategory></ManageCategory>,
      },
      {
        path: "paymentManagement",
        element: <PaymentManagement></PaymentManagement>,
      },
      {
        path: "salesReport",
        element: <SalesReport></SalesReport>,
      },
      {
        path: "manageBannerAdvertise",
        element: <ManageBannerAdvertise></ManageBannerAdvertise>,
      },

      // seller path
      {
        path: "sellerHome",
        element: <SellerHome></SellerHome>,
      },
      {
        path: "manageMedicines",
        element: <ManageMedicines></ManageMedicines>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "advertisement",
        element: <Advertisement></Advertisement>,
      },

      // User Path
      {
        path: "userPaymentHistory",
        element: <UserPaymentHistory></UserPaymentHistory>,
      },
      {
        path: "myQuery",
        element: <MyQuery></MyQuery>,
      },
    ],
  },
]);

export default router;
