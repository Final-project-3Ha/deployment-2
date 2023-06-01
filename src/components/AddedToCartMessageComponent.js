import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import './AddedToCartMessageComponent.css'
function AddedToCartMessageComponent() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div>
        <Alert show={show} onClose={() => setShow(false)} dismissible>
          <Alert.Heading style={{color:"white"}}>the product was added to your cart!</Alert.Heading>
          {/* <p>
          <Button variant="success">Go Back</Button>{" "}
          <Link to="/cart">
            <Button variant="danger">Go to cart</Button>
          </Link>
        </p> */}

          <Button variant="primary" type="submit" className="me-1">
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
}
export default AddedToCartMessageComponent;
