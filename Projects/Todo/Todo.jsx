import React from "react";
import { useState } from "react";
import "./style.css";

const Todo = () => {
  let [todo, setTodo] = useState([]);
  let [input, setInput] = useState("");

  let generateId = () => {
    return Math.floor(Math.random() * 100);
  };

  let handleChange = (e) => setInput(e.target.value);
  let handleSubmit = () => {
    if (!input.trim()) return;

    let newTodo = {
      text: input,
      id: generateId(),
    };

    setTodo((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  };

  let removeTodo = (id) => {
    setTodo((elem) => elem.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="New Todo"
      />

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      <ul className="todos-list">
        {todo.map((item) => (
          <li key={item.id} className="todo">
            <span>{item.text}</span>
            <button className="close" onClick={() => removeTodo(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
