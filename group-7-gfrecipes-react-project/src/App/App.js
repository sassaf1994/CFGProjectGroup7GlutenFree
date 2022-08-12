import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import CookBook from "../Cookbook/Cookbook";
import RecipeDetail from "../RecipeDetail/RecipeDetail";

function App() {
  return (
    <>
      <Router>
        <div className="links">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/cookbook" element={<CookBook />} />
            <Route path="/recipe-detail/:id" element={<RecipeDetail/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
