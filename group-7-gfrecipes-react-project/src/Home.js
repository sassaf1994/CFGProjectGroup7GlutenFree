import SearchBar from "./SearchBar";
import Header from "./Header";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function Home() {
  return (
    <div className="App">
      <Header />
      <NavigationBar/>
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Home;
