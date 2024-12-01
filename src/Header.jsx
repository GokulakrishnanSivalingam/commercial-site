import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import c from "./assets/c.png"

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
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">projects</a></li>
                   
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
