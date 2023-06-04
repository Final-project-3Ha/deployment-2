import React from "react";
import axios from "axios";
import CreateProductPageComponent from "./components/CreateProductPageComponent";
import { uploadImagesApiRequest } from "./utils/utils";
import { useSelector } from "react-redux";
import { newCategory } from "../../redux/actions/categoryActions";
import { useDispatch } from "react-redux";


const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post(`/api/products/admin`, { ...formInputs });
  return data;
};





function AdminCreateProductPage() {
    const { categories } = useSelector((state) => state.getCategories);
    const dispatch = useDispatch();

  return (
    <CreateProductPageComponent
      createProductApiRequest={createProductApiRequest}
      uploadImagesApiRequest={uploadImagesApiRequest}
      categories={categories}
      reduxDispatch={dispatch}
      newCategory={newCategory}
    />
  );
}

export default AdminCreateProductPage;
