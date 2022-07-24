import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import testRecipeImg from "./test-image.png";
import "./RecipeView.css";

function RecipeView() {
  return (
    <div className="recipeView">
      <div className="row">
        <div className="col-3">
          <div className="recipeCard">
            <Card className="recipeCard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={testRecipeImg} />
              <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>Recipe Description</Card.Text>
                <Button variant="primary">Go to recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-3">
          <div className="recipeCard">
            <Card className="recipeCard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={testRecipeImg} />
              <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>Recipe Description</Card.Text>
                <Button variant="primary">Go to recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-3">
          <div className="recipeCard">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={testRecipeImg} />
              <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>Recipe Description</Card.Text>
                <Button variant="primary">Go to recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-3">
          <div className="recipeCard">
            <Card className="recipeCard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={testRecipeImg} />
              <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>Recipe Description</Card.Text>
                <Button variant="primary">Go to recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeView;
