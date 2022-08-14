import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../Rating/Rating";
import { ThreeDots } from "react-loader-spinner";
import IngredientView from "./IngredientView";
import NutritionInfoView from "./NutritionInfoView";
import MyCookBookButton from "./MyCookbookButton";
import * as backendApiUtils from "../backendApiUtils";

function RecipeDetail() {
  const { id } = useParams();
  const [data, setRecipeData] = useState(null);
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(true);

  useEffect(
    function getRecipeData() {
      let apiUrl = `${backendApiUtils.URL}/recipe/specific/${id}`;
      axios
        .get(apiUrl)
        .then((response) => {
          console.log({ response });
          setRecipeData(response.data);
          setRecipeDataIsLoading(false);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
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
  return <RecipeDetailImpl data={data} />;
}

export default RecipeDetail;

export function RecipeDetailImpl(props) {
  const data = props.data;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="recipeTitle">{data["Name"]} ⭐️ No ratings yet!</h1>
            <a
              className="recipeLink"
              href={data["Recipe URL"]}
              target="_blank"
              rel="noreferrer"
            >
              See the full recipe at '{data["Source"]}' here
            </a>
          </div>
          <div className="col-4">
            <Rating recipeId={data["Recipe ID"]} />
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
                      {data["Ingredients"].map(
                        (singleIngredientLine, index) => (
                          <IngredientView
                            key={index}
                            ingredient={singleIngredientLine}
                          />
                        )
                      )}
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
