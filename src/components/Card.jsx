import { Flag, Heart, Notebook, Tags } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavourite } from "../redux/slices/FavouriteSlice";

const Card = ({ meal }) => {
  const dispatch = useDispatch();
  const {
    idMeal,
    strMealThumb,
    strMeal,
    strInstructions,
    strCategory,
    strArea,
    strTags,
  } = meal;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm px-4 py-2 bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-56 object-cover overflow-hidden"
      />

      <div className="p-6">
        <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mb-2">
          {strCategory}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{strMeal}</h3>
        <ul className="flex flex-col gap-3 mb-4 text-gray-700 text-base">
          <li className="flex items-center gap-3 ">
            <Notebook className="w-6 h-6 text-orange-500" />
            {strInstructions.split(" ").slice(0, 5).join(" ")}...
          </li>
          <li className="flex items-center gap-3">
            <Flag className="w-6 h-6 text-orange-500" />
            {strArea}
          </li>
          <li className="flex items-center gap-3">
            <Tags className="w-6 h-6 text-orange-500" />({strTags})
          </li>
        </ul>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200">
          <button
            onClick={() => navigate(`/menu/${idMeal}`)}
            className="text-sm font-medium text-white bg-[#e67e22] hover:bg-[#cf711f] px-4 py-2 rounded-lg transition"
          >
            More Details
          </button>
          <button
            onClick={() =>
              dispatch(addToFavourite({ idMeal, strMeal, strMealThumb }))
            }
            className="p-2 bg-gray-100 rounded-full hover:bg-red-100 group transition"
          >
            <Heart className="text-gray-500 group-hover:text-red-500 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
