import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading)
    return <h1 className="text-center font-4xl font-bold">Loading...</h1>;

  if (role === "Admin") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};
export default AdminRoute;
