import { useState } from "react";

let TodoList = () => {
  let [item, setItem] = useState([]);
  let [inputVal, setInputVal] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setItem([...item, inputVal]);
      setInputVal("");
    }
  };

  let handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputVal} onChange={handleChange} />
        <button type="submit">Add new item</button>
      </form>

      <ul>
        {item.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
