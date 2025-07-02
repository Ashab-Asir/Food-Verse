import { Beef, Flame, Star } from "lucide-react";

const Card = ({
  image,
  tag,
  title,
  calories,
  nutriScore,
  rating,
  ratingCount,
}) => {
  return (
    <div className="max-w-sm px-3 py-2 bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Meal Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover overflow-hidden"
      />

      {/* Content */}
      <div className="p-6">
        {/* Tag */}
        <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase mb-2">
          {tag}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

        {/* Attributes */}
        <ul className="flex flex-col gap-3 text-gray-700 text-base">
          <li className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-orange-500" />
            {calories} calories
          </li>
          <li className="flex items-center gap-3">
            <Beef className="w-5 h-5 text-orange-500" />
            NutriScore {nutriScore}
          </li>
          <li className="flex items-center gap-3">
            <Star className="w-5 h-5 text-orange-500" />
            {rating} rating ({ratingCount})
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
