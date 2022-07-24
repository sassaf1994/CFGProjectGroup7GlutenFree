import NavigationBar from "./NavigationBar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-4">
          <NavigationBar />
        </div>
        <div className="col-4">
          <h1>Gluten Free Recipes</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
