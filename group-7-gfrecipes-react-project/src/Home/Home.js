import SearchBar from "../Search/SearchBar";
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
        <div className="gluten-title">
          <h1>Gluten Free</h1>
        </div>
        <SearchBar />
      </>
      <Footer />
    </>
  );
}

export default Home;
