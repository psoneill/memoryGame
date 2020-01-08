import React from "react";

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

function Instructions(props) {
  const customStyle = props.customStyle;

  return (
    <div className={customStyle}>
      <h1>Memory Game!</h1>
      <hr></hr>
      <h4>Click on the images below without selecting any duplicates.  Memory masters can obtain a perfect score of 12.</h4>
    </div>
  );
}

export default Instructions;
