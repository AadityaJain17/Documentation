import React from "react";
import "./HoverCard.css";

function HoverCard({ src, alt, title, href }) {
  return (
    <div
      className="container noselect"
      onClick={() => {
        window.location.href = href;
      }}
    >
      <div className="canvas">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`tracker tr-${i + 1}`}></div>
        ))}

        <div id="card">
          <p id="prompt">
            <img src={src} alt={alt}></img>
          </p>

          <div className="title">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
