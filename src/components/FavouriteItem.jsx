import React from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../redux/slices/FavouriteSlice";

const FavoriteItem = ({ item }) => {
  const dispatch = useDispatch();
  const { idMeal, strMeal, strMealThumb } = item;
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/menu/${idMeal}`);
  };

  return (
    <div className="flex items-center gap-4 bg-white shadow p-3 rounded-lg mb-4">
      {/* Image */}
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-16 h-16 object-cover rounded-md"
      />

      {/* Info */}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 text-sm">{strMeal}</h4>
        <div className="flex gap-3 mt-2 text-sm">
          <button
            onClick={handleDetailsClick}
            className="text-orange-600 hover:underline"
          >
            More Details
          </button>
          <button
            onClick={() =>
              dispatch(removeFromFavourite({ idMeal, strMeal, strMealThumb }))
            }
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
