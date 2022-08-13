import Card from "react-bootstrap/Card";
import "./RecipeView.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeResults(props) {
  const [reviewData, setReviewData] = useState(0.0);

  // const data = {
  //   [props.data["Recipe ID"]]: props.data["Name"]
  // }
  const data = Object.fromEntries(
    props.data.map((recipe) => [recipe["Recipe ID"], recipe["Name"]])
  );

  console.log("put request", data);

  useEffect(
    function getReviews() {
      axios
        .put(`http://127.0.0.1:5000/recipe/reviews`, data)
        .then((response) => {
          setReviewData(response.data);
          console.log(reviewData);
        });
    },
    [props.data]
  );

  return (
    <div className="container">
      <div className="recipeView">
        {props.data.map((singleRecipeData) => (
          <RecipeCard
            data={singleRecipeData}
            key={singleRecipeData["Recipe ID"]}
            review={reviewData}
          />
        ))}
        {props.data.length === 0 ? <SearchError /> : null}
      </div>
    </div>
  );
}

export default RecipeResults;

function RecipeCard(props) {
  return (
    <div style={{ display: "inline-block", margin: "1em" }}>
      <div className="recipeCard">
        <Card
          className="recipeCard"
          style={{ width: "16rem", height: "26rem" }}
        >
          <Link
            to={`/recipe-detail/${props.data["Recipe ID"]}`}
            state={props.data}
          >
            <Card.Img variant="top" src={`${props.data["Image URL"]}`} />
          </Link>
          <Card.Body>
            <div className="row">
              <div className="col">
                <Card.Title>{props.data["Name"]}</Card.Title>
              </div>
              <div className="col">
                <Card.Text>⭐️ No Reviews</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function SearchError() {
  return (
    <h2 className="searchError">
      No results found. Please check your spelling and try again.
    </h2>
  );
}
