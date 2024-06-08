import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <h1 className="text-6xl font-bold text-center">Loading.....</h1>;
  }
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace="true" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element,
};
