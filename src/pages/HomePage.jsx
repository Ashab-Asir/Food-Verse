import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import img1 from "../assets/gallery/gallery-1.jpg";
import img2 from "../assets/gallery/gallery-2.jpg";
import img3 from "../assets/gallery/gallery-3.jpg";
import img4 from "../assets/gallery/gallery-4.jpg";
import img5 from "../assets/gallery/gallery-5.jpg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  const cards = [
    <Card
      meal={{
        strMealThumb: img1,
        strMeal: "Gyozas",
        strInstructions: "sdfodjsfl",
        strCategory: "Desert",
        strArea: "India",
        strTags: "egg",
      }}
    />,
    <Card
      meal={{
        strMealThumb: img2,
        strMeal: "Avocado Salad",
        strInstructions: "sdfodjsfl",
        strCategory: "Salad",
        strArea: "Japan",
        strTags: "zero cal",
      }}
    />,
    <Card
      meal={{
        strMealThumb: img3,
        strMeal: "Pasta",
        strInstructions: "sdfodjsfl",
        strCategory: "Salad",
        strArea: "Qatar",
        strTags: "Vegetarian",
      }}
    />,
    <Card
      meal={{
        strMealThumb: img4,
        strMeal: "Tacos",
        strInstructions: "sdfodjsfl",
        strCategory: "Dessert",
        strArea: "Bangladesh",
        strTags: "Spicy",
      }}
    />,
    <Card
      meal={{
        strMealThumb: img5,
        strMeal: "Grilled Fish",
        strInstructions: "sdfodjsfl",
        strCategory: "Fish",
        strArea: "Bangladesh",
        strTags: "Pescatarian",
      }}
    />,
  ];
  return (
    <div className="container font-inter max-w-full mx-auto">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="px-4 py-8 max-w-4xl mx-auto mb-10">
        <Carousel slides={cards} />
        <p className="text-center mt-8">See all recipes → </p>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
