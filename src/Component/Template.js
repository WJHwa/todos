import React from "react";
import "./main.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">오늘 할일({todoLength})</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
