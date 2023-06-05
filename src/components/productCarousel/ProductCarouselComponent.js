import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./ProductCarouselComponent.css";
function ProductCarouselComponent() {
  const monueh = "MONUEH SHOP";

  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel className="carousel-container ">
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{
            height: "87vh",
            objectFit: "cover",
            filter: "brightness(50%)",
            speed: 1000,
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <LinkContainer style={cursorP} to="/product-details">
            <h1>{monueh}</h1>
          </LinkContainer>
          <h4>Your Place To Buy Handmade Products From the Mountain Village</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "87vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h1>{monueh}</h1>
          </LinkContainer>
          <h4>
            Shop At Your Convenience And Choose The Most Delicious Organic Food
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "87vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h1>{monueh}</h1>
          </LinkContainer>
          <h4>
            For Nature Lovers and Who Enjoy Hiking, Camping, And Other Outdoor
            Activities
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
