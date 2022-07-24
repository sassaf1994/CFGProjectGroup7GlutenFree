import SearchBar from "./SearchBar";
import Header from "./Header";
import RecipeView from "./RecipeView";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="row">
        <div className="col-3">
        <RecipeView/>
        </div>
        <div className="col-3">
        <RecipeView/>
        </div>
        <div className="col-3">
        <RecipeView/>
        </div>
        <div className="col-3">
        <RecipeView/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
