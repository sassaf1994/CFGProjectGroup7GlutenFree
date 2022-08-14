import { useMemo, useState } from "react";
import "./Rating.css";
import axios from "axios";

function Rating(props) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    console.log('hover rating:', hoverRating)
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    console.log(rating);
  };

  useEffect(() => {saveRating();}, [rating])

  function saveRating() {
    let url = `https://east-eats-recipes.herokuapp.com/recipe/post_review`;
    axios.put(url, {[props.recipeId]: rating}).then((response) => {
        console.log(`Successfully sent rating: ${rating}`)
    })
  }

  return (
    <div className="rating">
      <h2>Rate This Recipe</h2>
      <div className="star-icons">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <RatingIcon
              index={index}
              key={index}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rating;

function StarIcon(props) {
  return (
    <div className="starIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={props.fill}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </div>
  );
}

function RatingIcon(props) {
  const fill = useMemo(() => {
    if (props.hoverRating >= props.index) {
      return "yellow";
    } else if (!props.hoverRating && props.rating >= props.index) {
      return "yellow";
    }
    return "none";
  }, [props.rating, props.index, props.hoverRating]);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => props.onMouseEnter(props.index)}
      onMouseLeave={() => props.onMouseLeave()}
      onClick={() => props.onSaveRating(props.index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
