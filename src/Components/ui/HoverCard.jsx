import React from "react";
import "./HoverCard.css";

function HoverCard() {
  return (
    <div className="container noselect">
      <div className="canvas">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`tracker tr-${i + 1}`}></div>
        ))}
        <div id="card">

          <p id="prompt">
            <img src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000" alt="js"></img>
          </p>

          <div className="title">JS</div>
          <div className="subtitle">Select language to learn</div>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;