import Card from "react-bootstrap/Card";
import "./RecipeView.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeResults(props) {
  const [reviewData, setReviewData] = useState(0);
  const [singleReviewData, setSingleReviewData] = useState("");

  const recipesSentForReview = Object.fromEntries(
    props.data.map((recipe) => [recipe["Recipe ID"], recipe["Name"]])
  );

  console.log("put request", reviewData);

  // useEffect(
  //   function getReviews() {
  //     axios
  //       .put(`http://127.0.0.1:5000/recipe/reviews`, recipesSentForReview)
  //       .then((response) => {
  //         setReviewData(response.data)
  //         console.log(`review data: ${reviewData}`);
  //       }).catch(function (error) {
  //         if (error.response) {
  //           console.log(error.response.data)
  //           console.log(error.response.status)
  //           console.log(error.response.headers)
  //         } else if (error.request) {
  //           console.log(error.request)
  //         } else {
  //           console.log('Error', error.message)
  //         }
  //         console.log(error.config)
  //       });
  //   },
  //   [props.data]
  // );

  // useEffect(() => {
  //   reviewData.map((singleRevData) => {
  //     if (singleRevData === 0) {
  //       setSingleReviewData("No Reviews set yet")
  //     } else {
  //       setSingleReviewData(`⭐️ ${singleReviewData}`)
  //     }
  //   }, [reviewData])
  // })

  return (
    <div className="container">
      <div className="recipeView">
        <ReviewScore review={reviewData} />
        {props.data.map((singleRecipeData) => (
          <RecipeCard
            data={singleRecipeData}
            key={singleRecipeData["Recipe ID"]}
            // review={singleReviewData}
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
                <Card.Text>{props.review}</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function ReviewScore(props) {
  return <p>⭐️ {props.review.value}</p>;
}

function SearchError() {
  return (
    <h2 className="searchError">
      No results found. Please check your spelling and try again.
    </h2>
  );
}
