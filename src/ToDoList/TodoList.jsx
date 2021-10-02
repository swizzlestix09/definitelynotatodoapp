import React from 'react';
import InputText from './InputText';

const toDoList = (props) => {
  let listItems = [];
  if (!props.tasks) {
    listItems = <div>I'm so empty. Like Kate Moss.</div>;
  } else {
    listItems = props.todoList.map((task, i) => (
      <li key={i.toString()} className="eachTask">
        {task}
        <input type="checkbox" />
      </li>
    ));
  }

  return (
    <div>
      <InputText />
      <ul>{listItems}</ul>
    </div>
  );
};

export default toDoList;
