import SearchBar from "./SearchBar";
import Header from "./Header";
import RecipeView from "./RecipeView";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <RecipeView />
      <RecipeView />
      <Footer />
    </div>
  );
}

export default Home;
