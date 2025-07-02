import { useEffect, useState } from "react";
import { Flag, Notebook, Tags, Youtube } from "lucide-react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const FoodDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      console.log(data);
      setMeal(data.meals[0]);
    };
    fetchMeal();
  }, [id]);
  if (!meal) return <p className="text-center mt-10">Loading...</p>;
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
    strYoutube,
    strInstructions,
  } = meal;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">{strMeal}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img
            src={strMealThumb}
            alt={strMeal}
            className="w-full rounded-lg shadow-md"
          />

          {/* Meta Info */}
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-lg">
              <Notebook className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">Category:</span> {strCategory}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Flag className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">Origin:</span> {strArea}
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Tags className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">Tags:</span> {strTags || "N/A"}
            </p>

            {strYoutube && (
              <a
                href={strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
              </a>
            )}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Cooking Instructions
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {strInstructions}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default FoodDetails;
