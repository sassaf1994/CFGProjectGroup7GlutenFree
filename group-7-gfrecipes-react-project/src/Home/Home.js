import { Helmet } from "react-helmet";
import SearchResults from "../Search/SearchResults";
import "./Home.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>EasyEats | Home</title>
      </Helmet>
      <h1 className="gluten-title">GlUTEN FREE RECIPES</h1>
      <SearchResults />
    </>
  );
}

export default Home;
