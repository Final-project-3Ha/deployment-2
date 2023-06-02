import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import "./AddedToCartMessageComponent.css";
function AddedToCartMessageComponent({ showCartMessage, setShowCartMessage }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Alert
        show={showCartMessage}
        onClose={() => setShowCartMessage(false)}
        dismissible
      >
        <Alert.Heading style={{ color: "white" }}>
          the product was added to your cart!
        </Alert.Heading>
        {/* <p>
          <Button variant="success">Go Back</Button>{" "}
          <Link to="/cart">
            <Button variant="danger">Go to cart</Button>
          </Link>
        </p> */}

        <Button
          variant="primary"
          onClick={goBack}
          type="submit"
          className="me-1"
        >
          Go Back
        </Button>
        <Link to="/cart">
          <Button variant="primary" type="submit">
            Go to cart
          </Button>
        </Link>
      </Alert>
    </div>
  );
}


export default AddedToCartMessageComponent;
