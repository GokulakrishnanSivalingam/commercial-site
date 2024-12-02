import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import c from "./assets/c1.jpg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
          <div className="title">  <h1><img src={c} alt="" /></h1></div>
            <nav className="navbar">
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="/" onClick={(e) => { handleScroll(e) }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { handleScroll(e) }}>About</a></li>
                    <li><a href="#contact" onClick={(e) => { handleScroll(e) }}>Contact</a></li>
                    <li><a href="#project" onClick={(e) => { handleScroll(e) }}>projects</a></li>
                   
                </ul>
                
                <div className="hamburger" onClick={toggleMenu}>
                
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
