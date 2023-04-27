// Importing necessary dependencies from React library 
import React, { useState } from "react";

// Function component called Collapse which accepts three props
const Collapse = ({ title, ingredients, instructions }) => {
  
  // Declaring isOpen state variable with initial value of false and defining a function to toggle it
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Returning JSX code that will be rendered on the screen
  return (
    <div className="w-full">
      {/* Defining a button with click event listener onClick which calls toggleCollapse function */}
      <button
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={toggleCollapse}
      >
        {/* Displaying title passed as prop */}
        {title}
      </button>
      
      {/* Rendering div elements only if isOpen state variable is true */}
      {isOpen && (
        <>
          <div className="mt-2 p-4 border border-blue-500 rounded-lg">
            {/* Displaying ingredients passed as prop */}
            <p> {ingredients}</p>
          </div>
          <div className="mt-2 p-4 border border-blue-500 rounded-lg">
            {/* Displaying instructions passed as prop */}
            <p> {instructions}</p>
          </div>
        </>
      )}
    </div>
  );
};

// Exporting Collapse component as default 
export default Collapse;
