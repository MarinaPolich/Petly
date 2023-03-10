import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/auth-selector";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  //   const isRefreshing = useSelector(getIsRefreshing);
  const shouldRedirect = !isLoggedIn; //&& !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
