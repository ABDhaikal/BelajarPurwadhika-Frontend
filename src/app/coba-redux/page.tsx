"use client";

import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
   decrement,
   increment,
   incrementByAmount,
} from "@/redux/slices/counter";
import React from "react";

const CobaRedux = () => {
   // get global state counter
   const counter = useAppSelector((state) => state.counter);
   const dispatch = useAppDispatch();

   const handleIncrement = () => {
      dispatch(increment());
   };

   const handleDecrement = () => {
      dispatch(decrement());
   };

   const handleIncrementByAmount = () => {
      dispatch(incrementByAmount(5));
   };

   return (
      <section className="pt-[5vh]">
         <div className="m-auto container flex flex-col gap-3 items-center justify-center bg-slate-200">
            <h1 className="text-center font-bold text-2xl">INTRO REDUX</h1>
            <p className="text-center">{counter.value}</p>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Button onClick={handleIncrementByAmount}>Increment By 5</Button>
         </div>
      </section>
   );
};

export default CobaRedux;
