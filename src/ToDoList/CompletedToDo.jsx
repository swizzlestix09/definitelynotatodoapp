import React from "react";

const CompletedToDo = ({ complete }) => (
 <div>
   <h1>Stuff That Doesn't Matter:</h1>
   <ul>
   {complete.map(eaItem => {
     return(
       <li key={eaItem}>{eaItem}</li>
     )
    })}
   </ul>

 </div>
);

export default CompletedToDo;