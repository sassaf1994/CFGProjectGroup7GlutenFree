import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import { Helmet } from "react-helmet";

import "./Cookbook.css";

function CookBook() {
  return (
    <>
      <>
        <Header />
        <NavigationBar />
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
        </div>
      </>
      <Footer />
    </>
  );
}

export default CookBook;
