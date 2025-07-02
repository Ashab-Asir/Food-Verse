import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./slices/FavouriteSlice";
import SearchSlice from "./slices/SearchSlice";
const Store = configureStore({
  reducer: {
    favourite: FavouriteSlice,
    search: SearchSlice,
  },
});

export default Store;
