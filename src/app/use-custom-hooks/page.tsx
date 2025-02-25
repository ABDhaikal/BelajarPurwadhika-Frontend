"use client";
import React, { useState } from "react";

const UseCustomHookPage = () => {
   const [count, setCount] = useState<number>(0);

   const handleIncrement = () => {
      setCount(count + 1);
   };

   const handleDecrement = () => {
      setCount(count - 1);
   };

   return (
      <section className="container  bg-yellow-200 flex-col items-center justify-center">
         <div className="m-auto">
            <h1>Use Custom Hook</h1>
            <p>{count}</p>
            <br />
            <button onClick={handleIncrement} className="border-4 border-black rounded-md m-auto">
               Increment
            </button>
            <button onClick={handleDecrement} className="border-4 border-black rounded-md m-auto">
               decrement
            </button>
         </div>
      </section>
   );
};

export default UseCustomHookPage;



// if we need to use same logic, we can use custom hooks
