import { X } from "lucide-react";
import { useSelector } from "react-redux";
import FavoriteItem from "./FavouriteItem";

const Drawer = ({ isOpen, onClose }) => {
  const favouritItems = useSelector((state) => state.favourite.favourite);
  console.log(favouritItems);
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out
        w-full sm:w-[30vw] 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Favorites</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {favouritItems.length > 0 ? (
          favouritItems.map((item) => (
            <FavoriteItem key={item.idMeal} item={item}></FavoriteItem>
          ))
        ) : (
          <h2 className="text-xl text-center mt-3 ">No Favourite Item...</h2>
        )}
      </div>
    </>
  );
};

export default Drawer;
