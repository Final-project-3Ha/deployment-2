import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
// import {LinkContainer }from 'react-router-bootstrap'
import { Link } from "react-router-dom";

function ProductForListComponent({
  productId,
  name,
  description,
  price,
  images,
  rating,
  reviewsNumber,
}) {
  return (
    <Card
      style={{
        marginTop: "8px",
        marginBottom: "40px",
        backgroundColor: "#f3f5fa",
      }}
    >
      {/* // <Card style={{ width: "80rem", marginTop: "30px", marginBottom: "50px",marginLeft:"50px", }}> */}
      <Row>
        <Col lg={5}>
          {/* <Card.Img variant="top" src="/images/Carousel/nature-1.jpg" /> */}
          <div className="product-card-image">

          <Card.Img variant="top" src={images[0] ? images[0].path : ""} />
          </div>
        </Col>

        <Col lg={7}>
          <Card.Body style={{ margin: "auto" }}>
            <Card.Title style={{ marginBottom: "20px" }}>{name}</Card.Title>

            <Card.Text style={{ marginBottom: "20px" }}>
              {description}
            </Card.Text>
            <Card.Text style={{ marginBottom: "20px" }}>
              <Rating readonly size={20} initialValue={rating} /> (
              {reviewsNumber})
            </Card.Text>
            <Card.Text className="h4" style={{ marginBottom: "20px" }}>
              ${price}
            </Card.Text>

            <Card.Text className="h4" style={{ marginBottom: "20px" }}>
              <Link to={`/product-details/${productId}`}>
                <Button variant="primary" type="true">
                  See Product
                </Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductForListComponent;
