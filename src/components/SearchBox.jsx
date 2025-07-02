import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <section
      className="relative w-full h-[40vh] bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to right bottom, rgba(235,151,78,0.5), rgba(230,125,34,0.5)),
          url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80')
        `,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6">
          Discover Your Next Favorite Meal
        </h2>

        <input
          type="text"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="Search meals..."
          className="w-full max-w-md px-5 py-3 rounded-md bg-white text-gray-800 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
    </section>
  );
};

export default SearchBox;
