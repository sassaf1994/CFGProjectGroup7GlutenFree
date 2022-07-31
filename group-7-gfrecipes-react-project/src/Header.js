import NavigationBar from "./NavigationBar";
import "./Header.css";
import logo from "./ProjectLogo.png";

function Header() {
  return (
    <div className="header">
      <img classname="logo" src={logo} alt="Easy Eats Logo" width={200} height={200} />
    </div>
  );
}

export default Header;
