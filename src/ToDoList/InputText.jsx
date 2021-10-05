import React from 'react';

const InputText = ({ currentToDo, textChange, submitToDo }) => {

  return(
  <div>
    <form>
      <input type="text" defaultValue={currentToDo} onChange={textChange}/>
      <input type="submit" value="+" onClick={submitToDo}/>
    </form>
  </div>
  )

};

export default InputText;
