import Card from "react-bootstrap/Card";
import "./RecipeView.css";
import { Link } from "react-router-dom";

// TODO consider making name less ambiguous - this is not a single recipe view.
function RecipeView(props) {
  return (
    <div className="container">
      <div className="recipeView">
        {/* set single recipe data from props and pass to recipe card to render */}
        {props.data.map((singleRecipeData) => (
          <RecipeCard data={singleRecipeData} />
        ))}
      </div>
    </div>
  );
}

export default RecipeView;

function RecipeCard(props) {
  console.log(`props at recipeCard: ${props.data["Name"]}`);
  return (
    <div style={{ display: "inline-block", margin: "1em" }}>
      <div className="recipeCard">
        <Card
          className="recipeCard"
          style={{ width: "16rem", height: "26rem" }}
        >
          <Link to={`/recipe-detail/${props.data["Recipe ID"]}`} state={props.data}>
            <Card.Img variant="top" src={`${props.data["Image URL"]}`} />
          </Link>
          <Card.Body>
            <div className="row">
              <div className="col">
                <Card.Title>{props.data["Name"]}</Card.Title>
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
