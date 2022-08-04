import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <li className='nav-item'>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            <NavLink className="nav-link" to="/cookbook">My Cookbook</NavLink>
            </li>
    </div>
    )
}

export default Navbar;