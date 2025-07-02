import React from "react";
import NavBar from "../components/NavBar";
import SearchBox from "../components/SearchBox";
import useGetFood from "../hooks/useGetFood";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";

const MenuPage = () => {
  const { meals, loading } = useGetFood();
  console.log(meals);
  return (
    <>
      <NavBar></NavBar>
      <SearchBox></SearchBox>
      {loading ? "Loading" : <FoodItems meals={meals}></FoodItems>}
      <Footer></Footer>
    </>
  );
};

export default MenuPage;
