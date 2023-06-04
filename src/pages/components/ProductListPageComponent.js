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
import { useParams } from "react-router-dom";

function ProductListPageComponent({ getProducts, categories }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [attrsFilter, setAttrsFilter] = useState([]);
  const [attrsFromFilter, setAttrsFromFilter] = useState([]);
  const [showResetFiltersButton, setShowResetFiltersButton] = useState(false);

  const [filters, setFilters] = useState({});
  const [price, setPrice] = useState(10);
  const [ratingsFromFilter,setRatingsFromFilter] = useState({})
      const [categoriesFromFilter, setCategoriesFromFilter] = useState({});

  const { categoryName } = useParams() || "";

  useEffect(() => {
    if (categoryName) {
      let categoryAllData = categories.find(
        (item) => item.name === categoryName.replaceAll(",", "/")
      );
      if (categoryAllData) {
        let mainCategory = categoryAllData.name.split("/")[0];
        let index = categories.findIndex((item) => item.name === mainCategory);
        setAttrsFilter(categories[index].attrs);
      }
    } else {
      setAttrsFilter([]);
    }
  }, [categoryName, categories]);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products.products);
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setError(true);
      });
    console.log(filters);
  }, [getProducts, filters]);

  const handleFilters = () => {
    setShowResetFiltersButton(true);
    setFilters({
      price: price,
      rating: ratingsFromFilter,
      category: categoriesFromFilter,
      attrs: attrsFromFilter,
    });
  };

  const resetFilters = () => {
    setShowResetFiltersButton(false);
    setFilters({});
    window.location.href = "/product-list";
  };

  return (
    <Container fluid className="mt-5 mb-5">
      <Row>
        <h1 className="mb-4">Product List Page</h1>
      </Row>

      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item className="mb-3 mt-3">
              FILTER: <br />
              <PriceFilterComponent price={price} setPrice={setPrice} />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent
                setRatingsFromFilter={setRatingsFromFilter}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent
                setCategoriesFromFilter={setCategoriesFromFilter}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent
                attrsFilter={attrsFilter}
                setAttrsFromFilter={setAttrsFromFilter}
              />
            </ListGroup.Item>
            <ListGroup.Item className="mt-2 ">
              <Button
                className="me-1 "
                variant="primary"
                id="filter"
                onClick={handleFilters}
              >
                Filter
              </Button>
              {showResetFiltersButton && (
                <Button onClick={resetFilters} variant="danger" id="reset">
                  Reset filters
                </Button>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {loading ? (
            <h1>Loading products...</h1>
          ) : error ? (
            <h1>Error while loading products. Try again later.</h1>
          ) : (
            products.map((product) => (
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
            ))
          )}
        </Col>
        <Row>
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
