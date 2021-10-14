import React from 'react';


const TodoList = ({ tasks, markedAsComplete, checkRef}) => {
  let listItems = [];
  if (!tasks) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  } else {
    listItems = tasks.map((task, i) => (
      <li key={i.toString()} className="eachTask">
        {task}
        <input ref={checkRef} type="checkbox" value={i} onClick={ ()=>{markedAsComplete(event)}}  />
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
