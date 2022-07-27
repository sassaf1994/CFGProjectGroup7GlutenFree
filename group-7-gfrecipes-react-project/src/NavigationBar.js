import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <Navbar expand="lg">
        <Container>
          <div className="collapse navbar-collapse" id="navbarNav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
