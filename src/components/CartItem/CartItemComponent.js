import React from "react";
import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";

function CartItemComponent({ item, orderCreated = false }) {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>

            <div className="category-card-image">


            <Image
              crossOrigin="anonymous"
              src={item.image ? item.image.path ?? null : null}
              fluid
            />
            </div>
          </Col>
          <Col md={2}>{item.name}</Col>
          <Col md={2}>
            <b>{item.price}</b>
          </Col>
          <Col md={3}>
            <Form.Select
              onChange={() => {}}
              disabled={orderCreated}
              value={item.quantity}
            >
              {[...Array(item.count).keys()].map((x) => (
                <option key={x} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
}

export default CartItemComponent;
