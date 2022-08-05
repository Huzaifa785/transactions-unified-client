import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isLoggeIn = localStorage.getItem("token");

  return isLoggeIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;