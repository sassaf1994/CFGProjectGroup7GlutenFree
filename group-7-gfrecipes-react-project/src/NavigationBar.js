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
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  MY COOKBOOK
                </Link>
              </li>
            </div>
          </Container>
        </Navbar>
      </div>

    // <div className="navigationBar">
    //   <nav className="navbar navbar-expand-lg">
    //     <button
    //       className="navbar-dark navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="#navbarNav"
    //       aria-expanded="true"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       {/* <ul className="navbar-nav ms-auto"> */}
    //       <div className="row">
    //         <div className="col-4">
    //           <div className="nav-item">
    //             <Link className="nav-link" to="/">
    //               Home
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="col-4">
    //           <div className="nav-item">
    //             <Link className="nav-link" to="/about">
    //               About Us
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default NavigationBar;
