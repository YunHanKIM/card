import { useState } from "react";
import "./Card.css";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="wrapped">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="front">앞면</div>
        <div className="back">뒷면</div>
      </div>
    </div>
  );
}
export default Card;
