import React from "react";
import "../ProductListPage/ProductListPage.css";
import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../../components/PaginationComponent.js";
import ProductForListComponent from "../../components/ProductForListComponent.js";
import SortOptionsComponent from "../../components/SortOptionComponent.js";
import PriceFilterComponent from "../../components/filterQueryResultOptions/PriceFilterComponent.js";
import RatingFilterComponent from "../../components/filterQueryResultOptions/RatingFilterComponent.js";
import CategoryFilterComponent from "../../components/filterQueryResultOptions/CategoryFilterComponent.js";
import AttributesFilterComponent from "../../components/filterQueryResultOptions/AttributesFilterComponent.js";
import { useEffect, useState } from "react";

function ProductListPageComponent({ getProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products.products))
      .catch((er) => console.log(er));
  }, []);

  return (
    <Container fluid className="mt-5">
      <Row>
        <h1 className="m-3">Product List Page</h1>
      </Row>

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
          {products.map((product) => (
            <ProductForListComponent
              className="d-flex justify-content-center"
              key={product._id}
              images={product.images}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              reviewsNumber={product.reviewsNumber}
              productId={product._id}
            />
          ))}
        </Col>
        <Row className="mb-4">
          <Col md={3}></Col>
          <Col md={9}>
            <PaginationComponent />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default ProductListPageComponent;
