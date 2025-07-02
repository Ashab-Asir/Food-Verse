import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center h-[100vh] bg-[#fef3e7] text-[#2e1907] px-4">
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">
          Page Not Found
        </p>
        <p className="text-center max-w-md text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist. It might have been
          removed or the URL might be incorrect.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
