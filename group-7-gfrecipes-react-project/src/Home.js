import SearchBar from "./SearchBar";
import Header from "./Header";
import RecipeView from "./RecipeView";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function Home() {
  return (
    <div className="App">
      <Header />
      <NavigationBar/>
      <SearchBar />
      <RecipeView />
      <RecipeView />
      <Footer />
    </div>
  );
}

export default Home;
