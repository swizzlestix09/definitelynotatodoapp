import React from 'react';

const InputText = ({ currentToDo, textChange, submitToDo }) => (
  <div>
    <form onSubmit={submitToDo}>
      <input type="text" value={currentToDo} onChange={textChange}/>
      <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default InputText;
