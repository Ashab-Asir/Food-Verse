import React from "react";
import Card from "./Card";

const FoodItems = ({ meals }) => {
  return (
    <section className="py-12 px-4">
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
          Our Delicious Meals
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {meals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodItems;
