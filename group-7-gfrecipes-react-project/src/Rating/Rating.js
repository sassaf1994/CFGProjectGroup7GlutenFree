import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import "./Rating.css";

function Rating() {
  return (
    <div className="rating">
      <h2>Rate This Recipe</h2>
      <div className="star-icons">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </div>
  );
}

export default Rating;

function StarIcon(props) {
  const [fill, setFill] = useState("none");
  return (
    <div>
      <FaRegStar className="starIcon" size="s"/>
    </div>
  );
}
