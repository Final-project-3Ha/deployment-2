import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
function CategoryCardComponent({ category, idx }) {
  //  const primaryColor = "#ffffff";
  //  const secondaryColor = "#458217";
  // const accentColor = "#E48334";

  // const accentButtonStyle = {
  //   backgroundColor: accentColor,
  // };
  
  return (
    // <Card style={{ background: "#EAF2FF" }}>
    <Card style={{ backgroundColor: "#f3f5fa" }}>
      <div className="category-card-image">
        <Card.Img
          crossOrigin="anonymous"
          variant="top"
          src={category.image ?? null}
          width="100%"
          height="100%"
        />
      </div>
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>{category.description}</Card.Text>
        {/* <LinkContainer to="product-list" style={accentButtonStyle}>
          <Button variant="primary" bg="#E48334" style={accentButtonStyle}> */}
        <Link to={`/product-list/category/${category.name}`}>
          <Button variant="primary" className=" btn btn-category btn-block">
            Go to the Category
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CategoryCardComponent;
