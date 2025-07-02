import { useState, useEffect } from "react";

const useGetFood = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=a`
        );
        const data = await response.json();
        setMeals(data.meals || []); // fallback to empty array if no results
      } catch (err) {
        console.log(err);
        setError("Failed to load meals");
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return { meals, loading, error };
};

export default useGetFood;
