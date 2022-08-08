import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import testImg from "./test-image.jpeg";
import IngredientLine from "../IngredientLine/IngredientLine";

function RecipeDetail(props) {
  console.log(`props at recipe detail ${props.recipeTitle}`)
  return (
    <>
      <Header />
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>{props.recipeTitle} ⭐️ 3.2</h1>
            <h3>Link to make recipe here</h3>
          </div>
          <div className="col-4">
            <p>Rate this recipe</p>
            <div>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>
          </div>
          <div className="row">
            <div className="col-5">
              <img src={testImg} width={200} height={200} />
            </div>
            <div className="col-7">
              <div className="nutritionIngredients">
                <div className="row">
                  <div className="col">
                    <h2>Nutrition</h2>
                  </div>

                  <div className="col">
                    <h2>Ingredients</h2>
                    <IngredientLine />
                    <IngredientLine />
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
