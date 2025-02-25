"use client";
import React, { useMemo, useState } from "react";

const UseMemoPage = () => {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 100) {
      i++;
      setCount(i);
    }
    return number % 2 === 0;
  }, [number]);

  return (
    <div className="items-center justify-center m-20">
      <h1>UseMemoPage</h1>
      <button className="bg-gray-50 p-4" onClick={() => setNumber(number + 1)}>
        {" "}
        Increment Number
      </button>
      <p>{isNumberEven ? "Even" : "Odd"}</p>
      <hr />
      <button className="bg-gray-50 p-4" onClick={() => setCount(count + 1)}>
        {" "}
        Increment Count
      </button>
      <p>{count}</p>
    </div>
  );
};

export default UseMemoPage;
