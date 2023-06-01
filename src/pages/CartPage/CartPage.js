import React from "react";
import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItemComponent from "../../components/CartItem/CartItemComponent.js";

function CartPage() {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
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
          <Alert variant="info">Your cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 Items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$200</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/user/cart-details">
                <Button variant="primary" type="submit">
                  Proceed To Checkout
                </Button>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
