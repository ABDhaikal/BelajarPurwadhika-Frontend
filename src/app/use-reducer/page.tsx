"use client"
import { useReducer, useState } from "react";

interface CountState {
  count: number;
}

interface CountAction {
  type: "increment" | "decrement";
  payload: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const UseReducerPage = () => {
  // sama kaya use state, cuman useReducer lebih digunakan untuk mengatur state
  // yang complex
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>USE REDUCER PAGE</h1>

      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        decrement
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
    </div>
  );
};

export default UseReducerPage;