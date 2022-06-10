import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <NavLink to="/">Logo</NavLink>
            </div>
            <div className="navbar__links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/wordle">Wordle</NavLink>
            </div>
        </div>
    )
}

export default Navbar;