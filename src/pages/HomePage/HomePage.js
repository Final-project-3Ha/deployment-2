import React from "react";
import { Row,Col, Container } from "react-bootstrap";
import ProductCarouselComponent from "../../components/productCarousel/ProductCarouselComponent.js";
import CategoryCardComponent from "../../components/CategoryCard/CategoryCardComponent.js";

function HomePage() {
  const categories = [
    "Dairy products",
    "Olive oil",
    "Zaatar",
    "Jam",
    "Torshi",
    "Olive oil",
    "Honey",
    "Zaatar",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <h2 className="mt-4 mb-4 ">Categories</h2>
        <Row xs={1} md={2} className="g-5 mb-5">
          {categories.map((category, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <CategoryCardComponent category={category} idx={idx} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
