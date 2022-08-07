import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Helmet} from 'react-helmet';
import NavigationBar from "../Navigation/NavigationBar";

function Home() {
  // return (
  //   <div className="App">
  //     <Header />
  //     <NavigationBar/>
  //     <SearchBar />
  //     <Footer />
  //   </div>
  // );

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
