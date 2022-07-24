import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import testRecipeImg from "./test-image.png"

function RecipeView() {
  return (
    <Card className="recipeCard" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={testRecipeImg} />
      <Card.Body>
        <Card.Title>Recipe Title</Card.Title>
        <Card.Text>
          Recipe Description
        </Card.Text>
        <Button variant="primary">Go to recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeView;
