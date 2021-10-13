import React from 'react';


const TodoList = ({ tasks, markedAsComplete }) => {
  let listItems = [];
  if (!tasks) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  } else {
    listItems = tasks.map((task, i) => (
      <li key={i.toString()} className="eachTask">
        {task}
        <input type="checkbox" value={i} onClick={markedAsComplete} ref={}/>
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
