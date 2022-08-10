import Container from "react-bootstrap/Container";
import "./NavigationBar.css";
import { NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <Navbar expand="lg">
        <Container>
          <div className="collapse navbar-collapse" id="navbarNav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cookbook">
                MY COOKBOOK
              </NavLink>
            </li>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
