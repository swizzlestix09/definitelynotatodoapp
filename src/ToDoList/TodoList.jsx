import React from 'react';
import dummydata from '../../dummydata';
import InputText from './InputText';

const TodoList = ({ props }) => {
  let listItems = [];
  if (!props) {
    listItems = <div>Im so empty. Like Kate Moss.</div>;
  } else {
    listItems = dummydata.map((task, i) => (
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

export default TodoList;
