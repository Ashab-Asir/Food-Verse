import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./slices/FavouriteSlice";
const Store = configureStore({
  reducer: {
    favourite: FavouriteSlice,
  },
});

export default Store;
