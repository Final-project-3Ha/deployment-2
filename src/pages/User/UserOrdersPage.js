import React from "react";
import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axios from "axios";


const getOrder = async (orderId) => {
  const { data } = await axios.get("/api/orders");
  return data;
};

function UserOrdersPage() {
  return <UserOrdersPageComponent getOrder={getOrder} />;
}

export default UserOrdersPage;
