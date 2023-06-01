import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "../user/userChatComponent.js";
import LoginPage from "../../pages/LoginPage/LoginPage.js";

function ProtectedRoutesComponent({ admin }) {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    axios
      .get("/api/get-token")
      .then(function (response) {
        const token = response.data.token;
        setIsAuth(token);
      })
      .catch(function (error) {
        console.log("Error:", error);
        setIsAuth(null);
      });
  }, [isAuth]);

  if (isAuth === undefined) return <LoginPage />;

  return isAuth && admin && isAuth !== "admin" ? (
    // <Navigate to="/login" />
    <Outlet/>
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutesComponent;



// Protected Route from mee  

// import { Outlet, Navigate } from "react-router-dom";
// import UserChatComponent from "./user/UserChatComponent";

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import LoginPage from "../pages/LoginPage";

// const ProtectedRoutesComponent = ({ admin }) => {
//   const [isAuth, setIsAuth] = useState();

//   useEffect(() => {
//      axios.get("/api/get-token").then(function (data) {
//          if (data.data.token) {
//              setIsAuth(data.data.token);
//          }
//          return isAuth;
//      }) 
//   }, [isAuth])

//   if (isAuth === undefined) return <LoginPage />;

//   return isAuth && admin && isAuth !== "admin" ? (
//        <Navigate to="/login" />
//   ) : isAuth && admin ? (
//       <Outlet />
//   ) : isAuth && !admin ? (
//       <>
//       <UserChatComponent />
//       <Outlet />
//       </>
//   ) : (
//        <Navigate to="/login" />
//   )
// };

// export default ProtectedRoutesComponent;
