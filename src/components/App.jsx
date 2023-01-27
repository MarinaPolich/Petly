// import { useMobile } from "hooks/useMobile";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Registration = lazy(() => import("../pages/Registration/Registration"));
const Login = lazy(() => import("../pages/Login/Login"));
const News = lazy(() => import("../pages/News/News"));
const Notices = lazy(() => import("../pages/Notices/Notices"));
const OurFriends = lazy(() => import("../pages/OurFriends/OurFriends"));
const User = lazy(() => import("../pages/User/User"));

export const App = () => {
  // const isMobile = useMobile();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="news" element={<News />} />
        <Route path="notices/:categoryName" element={<Notices />} />
        <Route path="friends" element={<OurFriends />} />
        <Route path="user" element={<User />} />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};
