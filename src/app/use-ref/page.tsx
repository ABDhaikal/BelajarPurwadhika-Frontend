"use client";
import { log } from "console";
import React, { useEffect, useRef, useState } from "react";

const UseRefPage = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
   return (
    <div className="container m-auto flex-col items-center">
      <input className="border border-black border-10"
        type="text"value={inputValue}onChange={(e) => setInputValue(e.target.value)}/>
      <h1>Render Count: {count.current}</h1>
      </div>
   );
};

export default UseRefPage;
  