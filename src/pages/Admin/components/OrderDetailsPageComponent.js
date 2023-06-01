import React from "react";
// import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItem/CartItemComponent.js";
// import { logout } from "../../../redux/actions/userAction.js";

function OrderDetailsPageComponent({ getOrder, markAsDelivered }) {
  const { id } = useParams();
  // const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] =
    useState("Mark as delivered");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setUserInfo(order.user);
        setPaymentMethod(order.paymentMethod);
        order.isPaid ? setIsPaid(order.paidAt) : setIsPaid(false);
        order.isDelivered
          ? setIsDelivered(order.deliveredAt)
          : setIsDelivered(false);
        setCartSubtotal(order.orderTotal.cartSubtotal);
        if (order.isDelivered) {
          setOrderButtonMessage("Order is finished");
          setButtonDisabled(true);
        }
        setCartItems(order.cartItems);
      })
      .catch(
        (er) => 
           console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
     
      );
  }, [isDelivered, id]);

  return (
    <Container fluid>
      <Row>
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.name}
              <br />
              <b>Address</b>: {userInfo.address} {userInfo.city} <br />
              <b>Phone</b>: {userInfo.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Payment method </h2>
              <Form.Select value={paymentMethod} disabled={true}>
                <option value="Credit Card">Credit Card</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert
                  className="mt-3"
                  variant={isDelivered ? "success" : "danger"}
                >
                  {isDelivered ? (
                    <>Delivered at {isDelivered}</>
                  ) : (
                    <>Not delivered</>
                  )}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                  {isPaid ? <>Paid on {isPaid}</> : <>Not paid yet</>}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            
            {cartItems.map((item, idx) => (
              <CartItemComponent key={idx} item={item} orderCreated={true} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup className="mt-3">
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item price (after tax):
              <span className="fw-bold">${cartSubtotal}</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping:<span className="fw-bold">included</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Tax:<span className="fw-bold">included</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#f7892d" }}>
              Total price:<span className="fw-bold"> ${cartSubtotal} </span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button
                  size="lg"
                  onClick={() =>
                    markAsDelivered(id)
                      .then((res) => {
                        if (res) {
                          setIsDelivered(true);
                        }
                      })
                      .catch((er) =>
                        console.log(
                          er.response.data.message
                            ? er.response.data.message
                            : er.response.data
                        )
                      )
                  }
                  type="button"
                  disabled={buttonDisabled}
                >
                  {orderButtonMessage}
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderDetailsPageComponent;
