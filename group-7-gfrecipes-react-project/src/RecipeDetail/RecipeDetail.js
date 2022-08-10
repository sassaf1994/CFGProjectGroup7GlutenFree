import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./RecipeDetail.css";

function RecipeDetail() {
  const location = useLocation();
  const data = location.state;
  console.log(`data at recipe detail: ${data}`);
  return (
    <>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>{data["Name"]} ⭐️ 3.2</h1>
            <a href={data["Recipe URL"]}>Link to Recipe Here</a>
          </div>
          <div className="col-4">
            <p>Rate this recipe</p>
            <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
          </div>
          <div className="row">
            <div className="col-5">
              <img src={data["Image URL"]} width={200} height={200} />
            </div>
            <div className="col-7">
              <div className="recipeDetails">
                <div className="nutritionIngredients">
                  <div className="row">
                    <div className="col">
                      <h2>Nutrition</h2>
                      {data["Ingredients"].map((singleNutritionLine) => (
                        <NutritionLine nutrition={singleNutritionLine} />
                      ))}
                    </div>

                    <div className="col">
                      <h2>Ingredients</h2>
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
      <p>{props.nutrition}</p>
    </div>
  );
}
