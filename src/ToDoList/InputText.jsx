import React from 'react';

const InputText = ({ textChange, submitToDo }) => {

  return(
  <div>
    <form>
      <input type="text" defaultValue="stuff" onChange={textChange}/>
      <input type="submit" value="+" onClick={submitToDo}/>
    </form>
  </div>
  )

};

export default InputText;
