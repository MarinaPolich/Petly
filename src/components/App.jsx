import {
  lazy,
  //  Suspense,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  // Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { refreshToken } from "redux/auth/auth-operations";
import { getIsRefreshing } from "redux/auth/auth-selector";
import { Loader } from "./Loader/Loader";
import { NoticesCategoriesList } from "./Notices";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Registration = lazy(() => import("../pages/Registration/Registration"));
const Login = lazy(() => import("../pages/Login/Login"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const User = lazy(() => import("../pages/User/User"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/user" component={<Login />} />}
        />
        <Route path="register" element={<Registration />} />
        <Route path="news" element={<News />} />
        <Route
          path="notices"
          element={
            // <Suspense fallback={<Loader />}>
            //   <Outlet />
            // </Suspense>
            <Notices />
          }
        >
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesCategoriesList />}
              />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesCategoriesList />}
              />
            }
          />
          <Route path=":category" element={<NoticesCategoriesList />} />
          <Route path="" element={<Navigate to="sell" />} />
        </Route>
        <Route path="friends" element={<OurFriends />} />
        <Route
          path="user"
          element={<PrivateRoute redirectTo="/login" component={<User />} />}
        />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
