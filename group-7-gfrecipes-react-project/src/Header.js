import NavigationBar from "./NavigationBar";
import "./Header.css";
import logo from "./ProjectLogo.png";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-4">
        </div>
        <div className="col-4 d-flex justify-content-center">
          <img src={logo} alt="Easy Eats Logo"/>
        </div>
        <div className="col-4">
        </div>
      </div>
    </div>
  );
}

export default Header;
