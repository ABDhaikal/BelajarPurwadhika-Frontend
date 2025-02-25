"use client";

import { useState, useCallback, useEffect } from "react";

const UseCallbackPage = () => {
  const [items, setItems] = useState<string[]>([]);

  const addItemWithoutCallback = () => {
    setItems((prev) => [...prev, "item"]);
  };

  const addItemWithCallback = useCallback(() => {
    setItems((prev) => [...prev, "item"]);
  }, [setItems]);

  useEffect(() => {
    console.log("add item function with callback");
  }, [addItemWithCallback]);

  useEffect(() => {
    console.log("add item function without callback");
  }, [addItemWithoutCallback]);

  return (
    <div>
      <h1>Use callback page</h1>

      <button onClick={addItemWithCallback}>add item with callback</button>
      <br />
      <button onClick={addItemWithoutCallback}>
        add item without callback
      </button>

      <ul>
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseCallbackPage;