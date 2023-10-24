import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/slices/authSlice";

const CheckAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    dispatch(setIsLoggedIn(isLoggedIn));
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default CheckAuth;
