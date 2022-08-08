import Card from "react-bootstrap/Card";
import "./RecipeView.css";
import { Link, NavLink } from "react-router-dom";

// TODO consider making name less ambiguous - this is not a single recipe view.
function RecipeView(props) {
  return (
    <div className="container">
      <div className="recipeView">
        {props.data.map((singleRecipeData) => (
          <RecipeCard
            key={singleRecipeData["Recipe ID"]}
            recipeTitle={singleRecipeData["Name"]}
            recipeImage={singleRecipeData["Image URL"]}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeView;

function RecipeCard(props) {
  return (
    <div style={{ display: "inline-block", margin: "1em" }}>
      <div className="recipeCard">
        <Card className="recipeCard" style={{ width: "16rem" }}>
          <Link
            to="recipedetail"
            key={props.key}
            recipeTitle={props.recipeTitle}
            recipeImage={props.recipeImage}
          >
            <Card.Img variant="top" src={`${props.recipeImage}`} />
          </Link>
          <Card.Body>
            <div className="row">
              <div className="col">
                <Card.Title>{props.recipeTitle}</Card.Title>
              </div>
              <div className="col">
                <Card.Text>⭐️ 3.7</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
