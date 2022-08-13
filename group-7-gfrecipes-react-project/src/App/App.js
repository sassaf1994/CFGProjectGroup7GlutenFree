import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import CookBook from "../Cookbook/Cookbook";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import Header from "../Header/Header";
import NavigationBar from "../Navigation/NavigationBar";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="cookbook" element={<CookBook />} />
          <Route path="recipe-detail/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
