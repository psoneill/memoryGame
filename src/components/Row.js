import React from "react";

function Row(props) {
  // return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
  return <div className={`row${props.fluid ? "-fluid" : ""} justify-content-center`}>{props.children}</div>;
}

export default Row;
