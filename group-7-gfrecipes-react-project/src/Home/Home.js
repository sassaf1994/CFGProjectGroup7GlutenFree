import SearchResults from "../Search/SearchResults";
import { Helmet } from "react-helmet";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <h1 className="gluten-title">GlUTEN FREE RECIPES</h1>
      </div>
      <SearchResults />
    </>
  );
}

export default Home;
