import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="container max-w-full mx-auto ">
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  );
};

export default HomePage;
