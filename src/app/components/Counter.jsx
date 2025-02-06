"use client"; // Required for client-side components in Next.js (App Router)

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("hello form counter", count);
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-gray-800 p-6 rounded-md shadow-lg text-white">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Reset
        </button>
        
      </div>
    </div>
  );
};

export default Counter;
