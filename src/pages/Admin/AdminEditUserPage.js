import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminEditUserPage() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5 ">
        {/* <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3 ">
            Go Back
          </Link>
        </Col> */}
        <Col md={6}>
          <h1 className="mb-4">Edit User</h1>
          <Form noValidate validated={validated} on onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                defaultValue="Hassan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label >Last name</Form.Label>
              <Form.Control
                name="lastName"
                required
                type="text"
                defaultValue="Hammoud"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                defaultValue="Hssn@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsCheckbox">
              <Form.Check
                name="isAdmin"
                type="checkbox"
                label="Is Admin"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-1">
              Update
            </Button>
            <Link to="/admin/users">
              <Button variant="primary" type="submit">
                Go Back
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminEditUserPage;
