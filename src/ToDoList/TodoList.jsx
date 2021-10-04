import React from 'react';


const TodoList = ({ tasks }) => {
  let listItems = [];
  if (!tasks) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  } else {
    listItems = tasks.map((task, i) => (
      <li key={i.toString()} className="eachTask">
        {task}
        <input type="checkbox" />
      </li>
    ));
  }

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default TodoList;
