import { useSelector } from "react-redux";
import Card from "./Card";
import IngredientFilter from "./IngredientFilter";

const FoodItems = ({ meals }) => {
  const search = useSelector((state) => state.search.search.toLowerCase());
  const selectedIngredients = useSelector(
    (state) => state.ingredientFilter.selectedIngredients
  );

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.strMeal.toLowerCase().includes(search);

    const mealIngredients = Array.from({ length: 20 }, (_, i) =>
      meal[`strIngredient${i + 1}`]?.toLowerCase()
    ).filter(Boolean);

    const matchesIngredients = selectedIngredients.every((ingredient) =>
      mealIngredients.includes(ingredient.toLowerCase())
    );

    return matchesSearch && matchesIngredients;
  });

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2e1907] mb-10">
          Our Delicious Meals
        </h2>

        <IngredientFilter meals={meals} />
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
