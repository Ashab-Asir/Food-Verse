import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetails from "./components/FoodDetails";
import ErrorPage from "./pages/ErrrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/menu" element={<MenuPage></MenuPage>}></Route>
        <Route path="/menu/:id" element={<FoodDetails />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
