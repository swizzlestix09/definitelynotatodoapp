import React from 'react';

const InputText = ({ currentToDo, textChange, submitToDo }) => (
  <div className="todoForm">
    <form onSubmit={submitToDo}>
      <label className="todoLabel headers">Stuffs:</label>
      <br/>
      <textarea className="inputBx" value={currentToDo} type="text" onChange={textChange}/>
      <br/>
      <input className="submitBtn" type="submit" value="Submit"/>
    </form>
  </div>
);

export default InputText;
