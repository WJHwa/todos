import React from "react";
import Todoitems from "./todoitems";
import "./main.css";

const Todolist = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className="Todolist">
      {todos.map((todo) => (
        <Todoitems
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
