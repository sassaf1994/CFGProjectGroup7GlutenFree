import Container from "react-bootstrap/Container";
import "./NavigationBar.css";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <Navbar expand="lg">
        <Container>
          <div className="collapse navbar-collapse" id="navbarNav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cookbook">
                MY COOKBOOK
              </Link>
            </li>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
