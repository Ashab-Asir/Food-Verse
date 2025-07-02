import { createSlice } from "@reduxjs/toolkit";

const getInitialFavourite = () => {
  const fav = localStorage.getItem("favourites");
  return fav ? JSON.parse(fav) : [];
};

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: getInitialFavourite(),
  },
  reducers: {
    addToFavourite: (state, action) => {
      const exists = state.favourite.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (!exists) {
        state.favourite.push(action.payload);
        localStorage.setItem("favourites", JSON.stringify(state.favourite));
      }
    },
    removeFromFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
      localStorage.setItem("favourites", JSON.stringify(state.favourite));
    },
  },
});

export const { addToFavourite, removeFromFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
