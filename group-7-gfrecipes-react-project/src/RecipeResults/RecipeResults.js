import Card from "react-bootstrap/Card";
import "./RecipeView.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function RecipeResults(props) {
  
  return (
    <><Helmet>
      <title>EasyEats | Recipe</title>
    </Helmet>
    <div className="container">
        <div className="recipeView">
          {props.data.map((singleRecipeData) => (
            <RecipeCard
              data={singleRecipeData}
              key={singleRecipeData["Recipe ID"]} />
          ))}
          {props.data.length === 0 ? <SearchError /> : null}
        </div>
      </div></>
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
                <Card.Text>Avg. Review {props.data["Average Review"] ?? "undef"}</Card.Text>
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
