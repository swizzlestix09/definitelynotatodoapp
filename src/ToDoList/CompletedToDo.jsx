import React from "react";

const CompletedToDo = ({ complete }) => (
  <div>
    <ul>
      {complete.map((eaItem) => {
        return <li key={eaItem}>{eaItem}</li>;
      })}
    </ul>
  </div>
);

export default CompletedToDo;
