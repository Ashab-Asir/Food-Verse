import { useSelector } from "react-redux";
import Card from "./Card";

const FoodItems = ({ meals }) => {
  const search = useSelector((state) => state.search.search.toLowerCase());

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search)
  );

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
          Our Delicious Meals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => <Card key={meal.idMeal} meal={meal} />)
          ) : (
            <p className="col-span-full text-gray-500">No meals found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodItems;
