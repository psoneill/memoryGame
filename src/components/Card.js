import React from "react";

function Card(props) {
  return (
    <div className="card col-3 text-center float-left">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
