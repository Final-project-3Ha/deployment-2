import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  CloseButton,
  Table,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminCreateProductPage() {
  const [validated, setValidated] = useState("false");
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
          <h1 className="mb-4">Create a new product</h1>
          <Form
            noValidate
            validated={validated.toString()}
            onSubmit={handleSubmit}
          >
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" required type="text" />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextareal"
            >
              <Form.Label className="mt-3">Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsCount">
              <Form.Label>count in stock</Form.Label>
              <Form.Control name="count" required type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" required type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicsCategory">
              <Form.Label>
                Category <br />
                <div className=" d-flex justify-content-md-center mt-2 mb-2">
                  <CloseButton className="me-1" />
                  {/* (<small>Remove selected</small>) */}
                  Remove selected
                </div>
              </Form.Label>
              <Form.Select
                name="category"
                required
                aria-label="Default select example"
              >
                <option value="">Choose category</option>
                <option value="1">Dairy products</option>
                <option value="2">Honey</option>
                <option value="3">Zaatar</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formNewCategory" className="mb-3 mt-3">
              <Form.Label>Or create a new category </Form.Label>
              <Form.Control name="newCategory" required type="text" />
            </Form.Group>

            <Row className="mt-3">
              <Row className="ms-1 mb-3">Choose attribute and set value</Row>
              <Col md={6}>
                <Form.Group controlId="formBasicAttributes" className="mb-3 ">
                  {/* <Form.Label>Choose attribute and set value </Form.Label> */}
                  <Form.Select
                    name="attrKey"
                    aria-label="Default select example"
                  >
                    <option> attribute</option>
                    <option value="Bronze">Color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  controlId="formBasicAttributeValue"
                  className="mb-3 "
                >
                  {/* <Form.Label>Attribute value </Form.Label> */}
                  <Form.Select
                    name="attrVal"
                    aria-label="Default select example"
                  >
                    <option>attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row hover="true">
              <Table>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Attr key</td>
                    <td>Attr value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formBasicNewAttribute" className="mb-3">
                  <Form.Label> Create a new attribute </Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder="first choose or create category"
                    name="newAttrValue"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  controlId="formBasicNewAttributeValue"
                  className="mb-3"
                >
                  <Form.Label> Attribute value </Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder="first choose or create category"
                    name="newAttrValue"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Alert>
              After typing attribute key and value press enter on one of the
              field
            </Alert>

            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
              <Form.Label>Images</Form.Label>
              <Form.Control required type="file" multiple />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-1">
              Create
            </Button>
            <Link to="/admin/products">
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

export default AdminCreateProductPage;
