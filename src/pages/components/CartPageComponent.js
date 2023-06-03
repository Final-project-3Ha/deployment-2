import React from "react";
import { Container, Row, Col, Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItemComponent from "../../components/CartItem/CartItemComponent.js";

function CartPageComponent({
  addToCart,
  removeFromCart,
  cartItems,
  cartSubtotal,
  reduxDispatch,
}) {
  const changeCount = (productID, count) => {
    reduxDispatch(addToCart(productID, count));
  };

  const removeFromCartHandler = (productID, quantity, price) => {
    if (window.confirm("Are you sure?")) {
      reduxDispatch(removeFromCart(productID, quantity, price));
    } 
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Alert variant="primary">Your cart is empty</Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
                <CartItemComponent
                  item={item}
                  key={idx}
                  changeCount={changeCount}
                  removeFromCartHandler={removeFromCartHandler}
                />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>
                Subtotal ({cartItems.length}{" "}
                {cartItems.length === 1 ? "Product" : "products"})
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">${cartSubtotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/user/cart-details">
                <Button
                  disabled={cartSubtotal === 0}
                  variant="primary"
                  type="submit"
                >
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

export default CartPageComponent;
