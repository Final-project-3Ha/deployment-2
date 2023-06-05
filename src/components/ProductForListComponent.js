import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
// import {LinkContainer }from 'react-router-bootstrap'
import { Link } from "react-router-dom";

function ProductForListComponent({images,idx}) {
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
          <Card.Img variant="top" src={images[idx]} />
        </Col>

        <Col lg={7}>
          <Card.Body style={{ margin: "auto" }}>
            <Card.Title style={{ marginBottom: "20px" }}>
              {" "}
              Product Name Lorem ipsum dolor sit amet
            </Card.Title>

            <Card.Text style={{ marginBottom: "20px" }}>
              Product Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
              <br /> Magni ipsa ducimus architecto explicabo id accusantium{" "}
              <br /> nihil exercitationem autem porro esse.
            </Card.Text>
            <Card.Text style={{ marginBottom: "20px" }}>
              <Rating readonly size={20} initialValue={5} /> (1)
            </Card.Text>
            <Card.Text className="h4" style={{ marginBottom: "20px" }}>
              10${" "}
              <Link to="/product-details">
                <Button variant="primary">See Product</Button>
              </Link>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductForListComponent;
