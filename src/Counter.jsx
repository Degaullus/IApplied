import React, { useEffect, useState } from "react";

// Define the counter
const Counter = () => {
  const [count, setCount] = useState(0);

  // Increasing function
  const increase = () => {
    setCount(count + 1);
  };

  // Function to persist in local storage
  const persist = () => {
    localStorage.setItem("count", count);
  };

  // Calling the persist function after each count update.
  useEffect(() => {
    persist(); // Call persist directly
  }, [count]); // Run only when count changes

  // Function to retrieve the count from local storage if there.
  const getStoredCount = () => {
    const storedValue = localStorage.getItem("count");
    if (storedValue) {
      setCount(parseInt(storedValue));
    } // Parsing the value to a number.
  };

  // Get the stored count on component mount
  useEffect(() => {
    getStoredCount();
  }, []); // Run only once on component mount

  return (
    <div>
      <p>Mathieu applied {count} times</p>
      <button onClick={increase}>Applied!</button>
    </div>
  );
};

export default Counter;
