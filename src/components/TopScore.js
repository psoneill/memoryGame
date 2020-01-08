import React from "react";

function TopScore(props) {
  return (
    <div className="card text-center bg-primary mb-3">
      <div className="card-header text-light">
        <h2>{props.heading}</h2>
      </div>
      <div className="card-body text-light"><h2>{props.topScore}</h2></div>
    </div>
  );
}

export default TopScore;
