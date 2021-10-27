import React from "react";

const TodoList = ({ tasks, markedAsComplete, checkRef, completedTodos }) => {
  let listItems,
    strikeouts = [];
  if (!tasks) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  } else {
    listItems = tasks.map((task, i) => (
        <li key={i.toString()} className="eachTask">
          {task}
          <input
            ref={checkRef}
            type="checkbox"
            value={i}
            onClick={() => {
              markedAsComplete(event);
            }}
          />
        </li>
    ));
  }

  if (completedTodos.length > 0) {
    strikeouts = completedTodos.map((strike, i) => (
      <li>
        <strike className="strikeout" key={`done${i.toString()}`}>
          {strike}
        </strike>
      </li>
    ));
  }

  return (
    <div className="todoList">
      <ul>{listItems}</ul>
      <ul>{strikeouts}</ul>
    </div>
  );
};

export default TodoList;
