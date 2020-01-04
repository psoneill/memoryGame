import React from "react";

function ScoreCounter(props) {
  return (
    <div className="card text-center bg-success mb-3">
      <div className="card-header text-light">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body text-light"><h2>{props.currentScore}</h2></div>
    </div>
  );
}

export default ScoreCounter;
