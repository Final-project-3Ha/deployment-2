import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItem/CartItemComponent.js";

function UserOrderDetailsPage() {
  return (
    <Container fluid>
      <Row>
        <h1>Order Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: Hassan Hammoud <br />
              <b>Address</b>: Khoucha/Halba/Akkar <br />
              <b>Phone</b>: +961 70118991
            </Col>
            <Col md={6}>
              <h2>Payment method </h2>
              <Form.Select disabled={false}>
                <option value="Credit Card">Credit Card</option>
                <option value="cod">
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 2023-5-25
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent
                item={{
                  image: {
                    path: "/images/Carousel/pexels-2.jpg",
                  },
                  name: "Product Name",
                  price: 10,
                  quantity: 10,
                  count: 10,
                }}
                key={idx}
              />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Item price (after tax):<span className="fw-bold">$252</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping:<span className="fw-bold">included</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Tax:<span className="fw-bold">included</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item style={{ color: "#f7892d" }}>
              Total price:<span className="fw-bold"> $500</span>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" type="button">
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserOrderDetailsPage;
