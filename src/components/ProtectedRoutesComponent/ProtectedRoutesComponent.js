import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "../user/userChatComponent.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";

function ProtectedRoutesComponent({ admin }) {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios.get("/api/get-token").then(function (data) {
      if (data.data.token) {
        setIsAuth(data.data.token);
      }
      return isAuth;
    });
  }, [isAuth]);

  if (isAuth === undefined) return <LoginPage />;

  // return isAuth && admin && isAuth !== "admin" ? (
  //   <Navigate to="/login" />
  // ) : isAuth && admin ? (
  //   <Outlet />
  // ) : isAuth && !admin ? (
  //   <>
  //     <UserChatComponent />
  //     <Outlet />
  //   </>
  // ) : (
  //   <Navigate to="/login" />
  // );

  if (isAuth && admin && isAuth.role !== "admin") {
    // return <Navigate to="/login" />;
    return <Outlet />;

  } else if (isAuth && admin) {
    return <Outlet />;
  } else if (isAuth && !admin) {
    return (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    );
  } 
  else {
    return <Navigate to="/login" />;
  }

}

export default ProtectedRoutesComponent;


