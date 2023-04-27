// Import necessary modules and components
import React, { useState, useEffect, useCallback } from "react";
import { FetchData } from "./helper/FetchData";
import Collapse from "./Components/Collapse";

// Define the main App function component
function App() {
  // Set initial state values using useState Hook
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handle changes to input value with useCallback Hook
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // Fetch recipes with API call using useCallback Hook
  const fetchRecipes = useCallback(async () => {
    try {
      setIsLoading(true); // Set loading state to true
      const recipes = await FetchData(inputValue); // Call the API with the inputValue
      setData(recipes); // Save the fetched data in state
    } catch (error) {
      console.error(error); // Log any errors that occur during API call
    } finally {
      setIsLoading(false); // Set loading state back to false when finished with API call
    }
  }, [inputValue]); // Update only when the inputValue changes

  // Use useEffect Hook to debounce the API call
  useEffect(() => {
    const debounceFn = setTimeout(() => {
      fetchRecipes(); // Execute the fetchRecipes function after a delay of 1000 milliseconds
    }, 1000);

    // Cleanup function to clear timeout when component unmounts or inputValue changes
    return () => clearTimeout(debounceFn);
  }, [inputValue, fetchRecipes]); // Update only when the inputValue or fetchRecipes function changes

  // Render JSX elements
  return (
    <div className="container mx-auto p-4 flex items-center justify-center gap-4 flex-col">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border-2 rounded-md border-blue-500 px-2"
      />

      {isLoading ? (
        <p className="text-indigo-600 font-medium">Loading...</p>
      ) : data ? (
        <div className="container mx-auto p-4 flex items-center justify-center gap-4 flex-col">
          {data.map((item) => (
            <Collapse
              title={item.title}
              ingredients={item.ingredients}
              instructions={item.instructions}
              key={item.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-medium">No results found</p>
      )}
    </div>
  );
}

// Export the main App component
export default App;
