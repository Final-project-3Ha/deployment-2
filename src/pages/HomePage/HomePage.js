import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import { useSelector } from "react-redux";


function HomePage() {
      const { categories } = useSelector((state) => state.getCategories);
  return (
    <>
      <HomePageComponent categories={categories} />
    </>
  );
}

export default HomePage;
