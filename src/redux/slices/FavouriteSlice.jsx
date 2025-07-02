import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const isExist = state.favourite.find(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (!isExist) {
        state.favourite.push(action.payload);
      }
    },
    removeFromFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
    },
  },
});

export const { addToFavourite, removeFromFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
