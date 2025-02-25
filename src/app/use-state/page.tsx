// need to makesure the component use the client side rendering
"use client"
import React, { useState } from "react";

const UseStatePage = () => {
  // declare the useState

  let [person, setPerson] = useState<string>();

  //   declare with default value
  let [person2, setPerson2] = useState("budi");

  // to set the value of the state
  const changePerson = () => {
    setPerson("Budi");
  };

  return (
    <div>
   {person} 
   {person2} 
    </div>
  );
};

export default UseStatePage;
