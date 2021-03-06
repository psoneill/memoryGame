import React from "react";

// This Col component offers us the convenience of being able to set a column's "size" prop instead of its className
// We can also omit the col- at the start of each Bootstrap column class, e.g. size="md-12" instead of className="col-md-12"

function PageHead(props) {
  const customStyle = props.customStyle;

  return (
    <div className={customStyle}>
      {props.children}
    </div>
  );
}

export default PageHead;
