import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { refreshToken, currentUser } from "redux/auth/auth-operations";
import { getIsLoggedIn, getIsRefreshing } from "redux/auth/auth-selector";
import { Loader } from "./Loader/Loader";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const VerificationEmail = lazy(() =>
  import("../pages/VerificationEmail/VerificationEmail")
);
const Registration = lazy(() => import("../pages/Registration/Registration"));
const Login = lazy(() => import("../pages/Login/Login"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const User = lazy(() => import("../pages/User/User"));
const NoticesCategoriesList = lazy(() =>
  import("./Notices/NoticesCategoriesList/NoticesCategoriesList")
);
const NoticesFavoriteList = lazy(() =>
  import("./Notices/NoticesCategoriesList/NoticesFavoriteList")
);
const NoticesOwnList = lazy(() =>
  import("./Notices/NoticesCategoriesList/NoticesOwnList")
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) dispatch(currentUser());
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="verification/:token"
          element={
            <RestrictedRoute
              redirectTo="/user"
              component={<VerificationEmail />}
            />
          }
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/user" component={<Login />} />}
        />
        <Route path="register" element={<Registration />} />
        <Route path="news" element={<News />} />
        <Route path="notices" element={<Notices />}>
          <Route
            path="favorite"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesFavoriteList />}
              />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<NoticesOwnList />}
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
