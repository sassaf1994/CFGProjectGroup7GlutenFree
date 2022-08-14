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
        <div className="cookbook-title">
          <h1>My Cookbook</h1>
          <div className="text">
            COMING SOON...
          </div>
        </div>
      </>
    </>
  );
}

export default CookBook;
