import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import PropTypes from "prop-types";

const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading)
    return <h1 className="text-center font-4xl font-bold">Loading...</h1>;

  if (role === "Seller") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

SellerRoute.propTypes = {
  children: PropTypes.element,
};
export default SellerRoute;
