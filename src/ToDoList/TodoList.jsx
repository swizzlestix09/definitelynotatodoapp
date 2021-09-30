import React from 'react';
import InputText from './InputText';

const toDoList = ({ tasks }) => {
  const listItems = tasks.todoList.map((task, i) => (
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
