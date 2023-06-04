import React from "react";
import ProductListPageComponent from "../components/ProductListPageComponent.js";
import axios from "axios";
import { useSelector } from "react-redux";


const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

function ProductListPage() {

    const { categories } = useSelector((state) => state.getCategories);

  return (
    <ProductListPageComponent
      getProducts={getProducts}
      categories={categories}
    />
  );
}

export default ProductListPage;
