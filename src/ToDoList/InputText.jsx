import React from 'react';

const InputText = ({ currentToDo, textChange, submitToDo }) => (
  <div className="todoForm">
    <form onSubmit={submitToDo}>
      <label className="todoLabel headers">Stuff:</label>
      <br/>
      <textarea className="inputBx"type="text" defaultValue={currentToDo} onChange={textChange}/>
      <br/>
      <input type="submit" value="Submit"/>
    </form>
  </div>
);

export default InputText;
