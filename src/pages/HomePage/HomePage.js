import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import { useSelector } from "react-redux";
import axios from "axios";

const getBestsellers = async () => {
  const { data } = await axios.get("/api/products/bestsellers");
  return data;
};



function HomePage() {
      const { categories } = useSelector((state) => state.getCategories);
  return (
    <>
      <HomePageComponent
        categories={categories}
        getBestsellers={getBestsellers}
      />
    </>
  );
}

export default HomePage;
