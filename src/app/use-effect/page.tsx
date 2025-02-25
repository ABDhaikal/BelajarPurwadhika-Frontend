"use client";

import { log } from "console";
import React, { useEffect, useState } from "react";

const UseEffectPage = () => {
  // mode -> will run every changes happpen of the state
  useEffect(() => {
    console.log("Use Effect mode 1dijalankan");
  });
  // mode 2 -> will run only first render
  useEffect(() => {
    console.log("Use Effect mode 2 dijalankan");
  }, []);

  // mode 3 -> like mode 2 but if there si change dependecy, code will run again
  const [dependecy, setDependecy] = useState<number>(0);
  const [dependecy2, setDependecy2] = useState<number>(0);

  useEffect(() => {
    console.log("Use Effect mode 3 dijalankan");
  }, [dependecy]);

  function Timer() {
    useEffect(() => {
      setTimeout(() => {
        setDependecy((dependecy) => dependecy + 1);
      }, 0.1);
    });
  }

  Timer();

  // the return
  return (
    //   mode 1
    <div>
      <h1>I've rendered {dependecy} times!</h1>;
    </div>
  );
};

export default UseEffectPage;
