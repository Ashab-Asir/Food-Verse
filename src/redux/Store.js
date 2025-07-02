import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./slices/FavouriteSlice";
import SearchSlice from "./slices/SearchSlice";
import ingredientFilterReducer from "./slices/IngredientFilterSlice";
const Store = configureStore({
  reducer: {
    favourite: FavouriteSlice,
    search: SearchSlice,
    ingredientFilter: ingredientFilterReducer,
  },
});

export default Store;
