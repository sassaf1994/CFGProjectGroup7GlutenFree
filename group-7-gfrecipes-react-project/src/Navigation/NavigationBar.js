import React from "react";
import Container from "react-bootstrap/Container";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <Navbar expand="lg" collapseOnSelect>
        <Container className="navbar-container">
          <NavbarToggle
            className="navbar-toggler"
            aria-controls="responsive-navbar-nav"
          />
          <NavbarCollapse id="responsive-navbar-nav">
            <div className="navbar-collapse" id="navbarNav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cookbook">
                  MY COOKBOOK
                </NavLink>
              </li>
            </div>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
