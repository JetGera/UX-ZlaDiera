import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Avatar.png";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="App">
            <div className="Header">
                <div>
                    <NavLink to="/"><img src={Logo} alt="logo" className="logo-btn"/></NavLink>
                </div>
                {isMobile ? (
                    <>
                        <button className="burger-menu" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                            <NavLink to="/fotogalery" onClick={toggleMenu}>Fotogaleria</NavLink>
                            <NavLink to="/rezervacia" onClick={toggleMenu}>Rezervacia</NavLink>
                            <NavLink to="/price-list" onClick={toggleMenu}>Cennik</NavLink>
                            <NavLink to="/o-nas" onClick={toggleMenu}>O nas</NavLink>
                            <NavLink to="/login" onClick={toggleMenu}>
                                <img src={Profile} alt="Profile" className="profile-icon"/>
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <div className="menu-links">
                        <div className="nav-links">
                            <NavLink to="/fotogalery">Fotogaleria</NavLink>
                            <NavLink to="/rezervacia">Rezervacia</NavLink>
                            <NavLink to="/price-list">Cennik</NavLink>
                            <NavLink to="/o-nas">O nas</NavLink>
                        </div>
                        <button className="profile-btn">
                            <NavLink to="/login">
                                <img src={Profile} alt="Profile"/>
                            </NavLink>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

