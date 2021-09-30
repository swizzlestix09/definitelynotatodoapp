import React from 'react';
import InputText from './InputText';

const toDoList = ({ tasks }) => {
  let listItems = [];
  if (tasks.length === 0) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  }
  listItems = tasks.todoList.map((task, i) => (
    <li key={i.toString()} className="eachTask">
      {task}
      <input type="checkbox" />
    </li>

  ));

  return (
    <div>
      <InputText />
      <ul>{listItems}</ul>
    </div>
  );
};

export default toDoList;
