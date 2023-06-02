import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.js";
import ProductDetailsPageComponent from "../components/ProductDetailsPageComponent.js";

function ProductDetailsPage() {
  const dispatch = useDispatch();

 

  return (
    <ProductDetailsPageComponent
      addToCartReduxAction={addToCart}
      reduxDispatch={dispatch}
    />
  );
}

export default ProductDetailsPage;
