import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import img from "../assets/Animation.gif";
import { Navigate, useLocation } from "react-router-dom";
const AdminPrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return (
      <span className="mx-auto my-auto text-center w-full">
        <img src={img} alt="" />
      </span>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;
