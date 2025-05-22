import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, role }) => {
  const { user } = useSelector((state) => state.auth);
  return user && user.role === role ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
