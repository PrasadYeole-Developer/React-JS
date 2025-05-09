import { useState } from "react";

let Counter = () => {
  let [count, setCount] = useState(0);
  let handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
