import { Helmet } from "react-helmet";
import "./Cookbook.css";

function CookBook() {
  return (
    <>
      <>
        <Helmet>
          <title>EasyEats | My Cookbook</title>
          <link
            rel="icon"
            type="image/png"
            href="/Users/danielleplumb/Desktop/CFG/Project/Project-code/project/public/favicon.ico"
            sizes="16x16"
          />
        </Helmet>
        <div>
          <h1 className="cookbook-title">My Cookbook</h1>
          <h2 className="savedRecipes">No saved recipes</h2>
        </div>
      </>
    </>
  );
}

export default CookBook;
