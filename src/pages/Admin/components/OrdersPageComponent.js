import React from "react";
// import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/Admin/AdminLinksComponent";
// import { logout } from "../../../redux/actions/userAction.js";

function OrdersPageComponent({ getOrders }) {
  // const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch(
        (er) => 
        setOrders([
          {
            name:
              er && er.response && er.response.data.message
                ? er.response.data.message
                : er && er.response && er.response.data,
          },
        ])
      );
    console.log(orders);
  }, []);

  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />{" "}
      </Col>
      <Col md={10}>
        <h1 className="mb-4"> Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  {order.user && order.user !== null ? (
                    <>
                      {order.user.name} {order.user.lastName}
                    </>
                  ) : null}
                </td>
                <td>
                  {order.createdAt ? order.createdAt.substring(0, 10) : "N/A"}
                </td>
                <td>
                  {order.orderTotal ? order.orderTotal.cartSubtotal : "N/A"}
                </td>
                <td>
                  {orders.isDelivered ? (
                    <i className="bi bi-check-lg text-success"></i>
                  ) : (
                    <i className="bi bi-x-lg text-danger"></i>
                  )}
                </td>
                <td>{order.paymentMethod}</td>
                <td>
                  <Link to={`/admin/order-details/${order._id}`}>
                    {" "}
                    Go to order
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default OrdersPageComponent;
