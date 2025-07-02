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
      image={img1}
      title="Gyozas"
      calories={650}
      nutriScore={74}
      rating={4.9}
      ratingCount={537}
      tag="Vegetarian"
    />,
    <Card
      image={img2}
      title="Avocado Salad"
      calories={400}
      nutriScore={92}
      rating={4.8}
      ratingCount={441}
      tag="Vegan"
    />,
    <Card
      image={img3}
      title="Pasta"
      calories={550}
      nutriScore={85}
      rating={4.6}
      ratingCount={321}
      tag="Vegetarian"
    />,
    <Card
      image={img4}
      title="Tacos"
      calories={480}
      nutriScore={88}
      rating={4.7}
      ratingCount={287}
      tag="Spicy"
    />,
    <Card
      image={img5}
      title="Grilled Fish"
      calories={430}
      nutriScore={95}
      rating={4.9}
      ratingCount={413}
      tag="Pescatarian"
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
