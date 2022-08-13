import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../Rating/Rating";
import { ThreeDots } from "react-loader-spinner";
import IngredientView from "./IngredientView";
import NutritionInfoView from "./NutritionInfoView";
import MyCookBookButton from "./MyCookbookButton";

function RecipeDetail() {
  const { id } = useParams();
  const [data, setRecipeData] = useState(null);
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(true);

  useEffect(
    function getRecipeData() {
      let apiUrl = `https://east-eats-recipes.herokuapp.com/recipe/specific/${id}`;
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
    return (
      <div className="loader">
        <ThreeDots className="loader" color="black" height={80} width={80} />;
      </div>
    );
  }
  return (
    <>
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
                      <NutritionInfoView data={data} />
                    </div>
                    <div className="col">
                      <h2 className="niTitle">Ingredients</h2>
                      {data["Ingredients"].map((singleIngredientLine) => (
                        <IngredientView ingredient={singleIngredientLine} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;


