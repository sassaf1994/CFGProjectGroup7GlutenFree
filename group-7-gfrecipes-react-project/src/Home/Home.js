import Search from "../Search/SearchData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Helmet} from 'react-helmet';
import NavigationBar from "../Navigation/NavigationBar";
import "./Home.css";

function Home() {
  return (
    <>
      <>
        <Header />
        <NavigationBar />
        <Helmet>
          <title>EasyEats | Home</title>
        </Helmet>
        <div>
          <h1 className="gluten-title">GlUTEN FREE RECIPES</h1>
        </div>
        <Search />
      </>
      <Footer />
    </>
  );
}

export default Home;
