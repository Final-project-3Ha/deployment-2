import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  ListGroup,
  Form,
  Alert,
  Button,
  Image,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent.js";
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Redux actions

function ProductDetailsPageComponent({ addToCartReduxAction, reduxDispatch }) {
  const { id } = useParams();
     const [quantity, setQuantity] = useState(1);
     const [showCartMessage, setShowCartMessage] = useState(false);

     const addToCartHandler = () => {
       reduxDispatch(addToCartReduxAction(id, quantity));
        setShowCartMessage(true);
     };

  var options = {
    // width: 400,
    // zoomWidth: 500,
    // fillContainer: true,
    // zoomPosition: "botttom"
    scale: 2,
    offset: { vertical: 0, horizontal: 0 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
    new ImageZoom(document.getElementById("fourth"), options);
  });

   



  return (
    <Container>
      <AddedToCartMessageComponent
        showCartMessage={showCartMessage}
        setShowCartMessage={setShowCartMessage}
      />
      <Row>
        <h1 className="mt-4">Product name</h1>
      </Row>
      <Row className="mt-3">
        <Col style={{ zIndex: 1 }} md={4}>
          <div id="first">
            <Image
              crossOrigin="anonymous"
              fluid
              src="/images/Carousel/pexels-2.jpg"
            />
          </div>
          <br />
          <div id="second">
            <Image src="/images/Carousel/pexels-2.jpg" fluid />
          </div>
          <br />
          <div id="third">
            <Image src="/images/Carousel/pexels-2.jpg" fluid />
          </div>
          <br />
          <div id="fourth">
            <Image src="/images/Carousel/pexels-2.jpg" fluid />
          </div>
          <br />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                {/* <ListGroup.Item>
                  <h1>Product name</h1>
                </ListGroup.Item> */}
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$10</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum suscipit risus mauris, lobortis dapibus eros
                  tincidunt vel. Praesent sit amet urna in ipsum tincidunt
                  scelerisque.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$10</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    size="lg"
                    aria-label="Default select example"
                  >
                    {/* <option>Choose</option> */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="">
                    <Button
                      onClick={addToCartHandler}
                      variant="primary"
                      type="submit"
                    >
                      Add to cart
                    </Button>
                  </Link>
                  {/* <Button variant="danger">Add to cart</Button> */}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    Hassan Hammoud <br />
                    <Rating readonly size={20} initialValue={4} /> <br />
                    25-5-2023 <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum suscipit risus mauris,
                    </p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">Very good</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Bad</option>
              <option value="1">Awful</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailsPageComponent;
