import "./Header.css";
import logo from "./easyeatsnobackground.png";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src={logo}
        alt="Easy Eats Logo"
        width={200}
        height={200}
      />
    </div>
  );
}

export default Header;
