import React, { useEffect, useState } from "react";
import "./main.css";

const Todoinsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
  const [value, setvalue] = useState("");

  const onChange = (e) => {
    setvalue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setvalue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setvalue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        className="form"
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, selectedTodo.text);
              }
            : onSubmit
        }
      >
        <input
          placeholder="입력하세요"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div>
            <button
              className="rewrite"
              type="submit"
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            >
              수정
            </button>
            <button
              className="m"
              type="submit"
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            >
              지우기
            </button>
          </div>
        ) : (
          <button type="submit">+</button>
        )}
      </form>
    </div>
  );
};

export default Todoinsert;
