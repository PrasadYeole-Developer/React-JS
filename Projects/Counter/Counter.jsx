import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </section>
    </>
  );
};

export default Counter;
