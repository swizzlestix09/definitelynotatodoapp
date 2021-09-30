import React from "react";
import InputText from "./InputText";

const toDoList = (props) => {
  let tasks = props.tasks;
  const listItems = tasks.map((task, i) =>
    <li key={i.toString()} className="eachTask">
      {task}
    </li>
  );

  return (
    <div>
      <InputText />
      <ul>{listItems}</ul>
    </div>
  );
};

export default toDoList;
