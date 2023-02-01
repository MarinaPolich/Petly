import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader/Loader";
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
  return (
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          }
        >
          <Route
            path="favorite"
            element={
              <PrivateRoute redirectTo="/login" component={<Notices />} />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute redirectTo="/login" component={<Notices />} />
            }
          />
          <Route path=":categoryName" element={<Notices />} />
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
