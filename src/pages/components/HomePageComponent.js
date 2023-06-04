import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductCarouselComponent from "../../components/productCarousel/ProductCarouselComponent.js";
import CategoryCardComponent from "../../components/CategoryCard/CategoryCardComponent.js";
import { useEffect, useState } from "react";

function HomePageComponent({categories}) {

     const [mainCategories, setMainCategories] = useState([]);

      useEffect(() => {
        setMainCategories((cat) =>
          categories.filter((item) => !item.name.includes("/"))
        );
      }, [categories]);


  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <h2 className="mt-4 mb-4 ">Categories</h2>
        <Row xs={1} md={2} className="g-5 mb-5">
          {mainCategories.map((category, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <CategoryCardComponent category={category} idx={idx} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePageComponent;