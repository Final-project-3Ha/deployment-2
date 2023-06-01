import OrdersPageComponent from "./components/OrdersPageComponent";
import axios from "axios";

const getOrders = async () => {
  const {data} = await axios.get("/api/orders/admin")
  return data
}

function AdminOrdersPage() {
  return <OrdersPageComponent getOrders={getOrders} />;
}

export default AdminOrdersPage;
