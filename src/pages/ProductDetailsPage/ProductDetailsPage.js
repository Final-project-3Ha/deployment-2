import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.js";
import ProductDetailsPageComponent from "../components/ProductDetailsPageComponent.js";
import axios from "axios";


const getProductDetails = async (id) => {
  const { data } = await axios.get(`/api/products/get-one/${id}`);
  return data;
};



function ProductDetailsPage() {
  const dispatch = useDispatch();

 

  return (
    <ProductDetailsPageComponent
      addToCartReduxAction={addToCart}
      reduxDispatch={dispatch}
      getProductDetails={getProductDetails}
    />
  );
}

export default ProductDetailsPage;
