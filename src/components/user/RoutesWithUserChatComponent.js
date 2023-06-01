import React from "react";
import { Outlet } from "react-router-dom";
import UserChatComponent from "./userChatComponent.js";
function RoutesWithUserChatComponent() {
  return (
    <div>
      <UserChatComponent />
      <Outlet />
    </div>
  );
}

export default RoutesWithUserChatComponent;
