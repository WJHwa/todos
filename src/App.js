import "./App.css";
import Template from "./Component/Template";
import Todolist from "./Component/Todolist";
import { useState } from "react";
import Todoinsert from "./Component/Todoinsert";

var nextId = 4;
function App() {
  const [selectedTodo, setselectedTodo] = useState(null);
  const [InsertToggle, setInserttoggle] = useState(false);
  const [todos, settodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: false,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setselectedTodo(null);
    }
    setInserttoggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("입력을 해주세여");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      settodos((todos) => todos.concat(todo));
      nextId++;
    }
  };
  const onCheckToggle = (id) => {
    settodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setselectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    settodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    settodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
  return (
    <Template todoLength={todos.length}>
      <Todolist
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <button
        type="button"
        className="add-todo-button"
        onClick={onInsertToggle}
      >
        +
      </button>
      {InsertToggle && (
        <Todoinsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          selectedTodo={selectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
}

export default App;
