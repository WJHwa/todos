import React from "react";
import "./main.css";

const Todoitems = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;

  return (
    <div className="Todoitem">
      <div className={`content ${checked ? "checked" : ""}`}></div>
      <input
        className="checkbox"
        type="checkbox"
        onClick={() => {
          onCheckToggle(id);
        }}
      ></input>
      <div
        className="text"
        onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Todoitems;
