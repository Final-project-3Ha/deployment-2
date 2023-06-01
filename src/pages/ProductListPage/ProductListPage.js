import React from "react";
import "./ProductListPage.css";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent.js";
import ProductForListComponent from "../../components/ProductForListComponent.js";
import SortOptionsComponent from "../../components/SortOptionComponent.js";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent.js";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent.js";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent.js";
import AttributesFilterComponent from "../../components/filterQueryResultOptions/AttributesFilterComponent.js";
import axios from "axios";

function ProductListPage() {
  axios.get("/api/products").then((res) => console.log(res));

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 mt-3">
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item className="mt-2 ">
              <Button className="me-1 " variant="primary" id="filter">
                Filter
              </Button>
              <Button variant="danger" id="reset">
                Reset filters
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {Array.from({ length: 2 }).map((_, idx) => (
            <ProductForListComponent
              key={idx}
              images={[
                "/images/Carousel/pexels-2.jpg",
                "/images/Carousel/pexels-2.jpg",
              ]}
              idx={idx}
            />
          ))}
        </Col>
        <Row className="mb-4">
          <Col md={3}></Col>
          <Col md={9} >
            <PaginationComponent  />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default ProductListPage;
