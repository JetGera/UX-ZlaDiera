import React from "react";
import "./Header.css";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Avatar.png";

const Header = () => {
    return (
        <div className="Header">
            <button>
                <img src={Logo} className="logo-btn"/>
            </button>

            <div className="nav-links">
                <a>Fotogaleria</a>
                <a>Rezervacia</a>
                <a>Cennik</a>
                <a>O nas</a>

                <button>
                    <img src={Profile} className="profile-btn"/>
                </button>
            </div>

        </div>
    );
};

export default Header;
