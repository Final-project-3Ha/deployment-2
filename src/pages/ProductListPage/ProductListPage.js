import React from "react";
import ProductListPageComponent from "../components/ProductListPageComponent.js";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

function ProductListPage() {

  return <ProductListPageComponent getProducts={getProducts} />;
}

export default ProductListPage;
