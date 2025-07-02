import { createSlice } from "@reduxjs/toolkit";

const IngredientFilterSlice = createSlice({
  name: "ingredientFilter",
  initialState: {
    selectedIngredients: [],
  },
  reducers: {
    toggleIngredient: (state, action) => {
      const ingredient = action.payload;
      if (state.selectedIngredients.includes(ingredient)) {
        state.selectedIngredients = state.selectedIngredients.filter(
          (ing) => ing !== ingredient
        );
      } else {
        state.selectedIngredients.push(ingredient);
      }
    },
    resetIngredients: (state) => {
      state.selectedIngredients = [];
    },
  },
});

export const { toggleIngredient, resetIngredients } =
  IngredientFilterSlice.actions;
export default IngredientFilterSlice.reducer;
