import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../Rating/Rating";

function RecipeDetail() {
  const { id } = useParams();
  const [data, setRecipeData] = useState(null);
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(true);

  useEffect(
    function getRecipeData() {
      let apiUrl = `http://127.0.0.1:5000/recipe/specific/${id}`;
      axios.get(apiUrl).then((response) => {
        console.log({ response });
        setRecipeData(response.data);
        setRecipeDataIsLoading(false);
      });
      setRecipeData(null);
    },
    [id]
  );

  if (recipeDataIsLoading) {
    return <>Loading</>;
  }
  return (
    <>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="recipeTitle">{data["Name"]} ⭐️ 3.2</h1>
            <a className="recipeLink" href={data["Recipe URL"]}>
              See the full recipe at '{data["Source"]}' here
            </a>
          </div>
          <div className="col-4">
            <Rating />
          </div>
          <div className="row">
            <div className="col-5">
              <img
                className="recipeImage"
                src={data["Image URL"]}
                alt={`${data["Name"]}`}
                width={400}
                height={400}
              />
              <MyCookBookButton />
            </div>
            <div className="col-7">
              <div className="recipeDetails">
                <div className="nutritionIngredients">
                  <div className="row">
                    <div className="col">
                      <h2 className="niTitle">Nutrition</h2>
                      <NutritionLine data={data} />
                    </div>
                    <div className="col">
                      <h2 className="niTitle">Ingredients</h2>
                      {data["Ingredients"].map((singleIngredientLine) => (
                        <IngredientLine ingredient={singleIngredientLine} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecipeDetail;

function IngredientLine(props) {
  return (
    <div className="ingredientLine">
      <p>{props.ingredient}</p>
    </div>
  );
}

function NutritionLine(props) {
  return (
    <div className="nutritionLine">
      <p>Total Fat: {props.data["Total Fat"]}</p>
      <ul>
        <li>Saturated Fat: {props.data["Sat Fat"]}</li>
        <li>Polyunsaturated Fat: {props.data["Poly Fat"]}</li>
        <li>Monounsaturated Fat: {props.data["Mono Fat"]}</li>
      </ul>
      <p>Total Carbs: {props.data["Total Carbs"]}</p>
      <ul>
        <li>Of which sugars: {props.data["Carbs which Sugar"]}</li>
        <li>Net Carbs: {props.data["Net Carbs"]}</li>
      </ul>
      <p>Salt: {props.data["Salt"]}</p>
      <p>Protein: {props.data["Protein"]}</p>
      <p>Fibre: {props.data["Fibre"]}</p>
    </div>
  );
}

function MyCookBookButton() {
  return (
    <div>
      <button className="myCookBookButton">
        📖 Add this recipe to Cookbook
      </button>
    </div>
  );
}
