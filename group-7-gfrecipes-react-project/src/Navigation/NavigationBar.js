// import Container from "react-bootstrap/Container";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navbar">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/aboutus">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/cookbook">
          My Cookbook
        </NavLink>
      </li>
    </div>

    // <div className="navigationBar">
    //   <Navbar expand="lg">
    //     <Container>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             HOME
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             ABOUT US
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             MY COOKBOOK
    //           </Link>
    //         </li>
    //       </div>
    //     </Container>
    //   </Navbar>
    // </div>
  );
}

export default NavigationBar;
