import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"
function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink to="/Accueil">
            <div className='navbar__logo'>
                <img src="LOGO.png" alt="logo" />
            </div>
            </NavLink>
            <NavLink to="/Accueil">Accueil</NavLink>
            <NavLink to="/About" className="line">A Propos</NavLink>
        </nav>
    )
}
export default Navbar;