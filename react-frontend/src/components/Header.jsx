import React from "react";
import "./Header.css";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Avatar.png";
import {NavLink} from "react-router-dom";
import {Link} from "react-aria-components";

const Header = () => {
    return (
        <div className="App">
            <div className="Header">
                <div>
                    <NavLink to="/"><img src={Logo} alt="logo" className="logo-btn"/></NavLink>
                </div>
                <div className="menu-links">
                    <div className="nav-links">
                        <NavLink to="/fotogalery"><Link>Fotogaleria</Link></NavLink>
                        <NavLink to="/rezervacia"><Link>Rezervacia</Link></NavLink>
                        <NavLink to="/price-list"><Link>Cennik</Link></NavLink>
                        <NavLink to="/about-us"><Link>O nas</Link></NavLink>
                    </div>
                    <button className="profile-btn">
                        <NavLink to="/profile">
                            <img src={Profile} alt="Profile"/>
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
