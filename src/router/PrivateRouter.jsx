import useAuth from "../hooks/useAuth";
import img from "../assets/Animation.gif";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRouter = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <span className="mx-auto my-auto text-center w-full">
        <img src={img} alt="" />
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
