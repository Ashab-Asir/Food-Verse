import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient } from "../redux/slices/IngredientFilterSlice";

const IngredientFilter = ({ meals }) => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(
    (state) => state.ingredientFilter.selectedIngredients
  );

  const allIngredients = meals.flatMap((meal) =>
    Array.from({ length: 20 }, (_, i) => meal[`strIngredient${i + 1}`])
  );
  const uniqueIngredients = [...new Set(allIngredients.filter(Boolean))];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {uniqueIngredients.slice(0, 20).map((ingredient) => (
        <button
          key={ingredient}
          onClick={() => dispatch(toggleIngredient(ingredient))}
          className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
            selectedIngredients.includes(ingredient)
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-orange-600 border-orange-300"
          }`}
        >
          {ingredient}
        </button>
      ))}
    </div>
  );
};

export default IngredientFilter;
