import React from 'react';
import { useState,useEffect } from 'react';
import TsLogo from '../assets/ts-logo.png';
import "../Styles/Navbar.css";
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    // Prevent Scroll when the menu is open in mobile view
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
      }, [isOpen]);

    return (
        <div className={`nav-container  ${isOpen ? "navbar-open" : ""}`}>
        <nav className="navbar">
           <img className="logo" src={TsLogo} alt="Logo" />
            <ul className="nav-links">
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">About</a></li>
                <li className="nav-link"><a href="#">Services</a></li>
                <li className="nav-link"><a href="#">Blogs</a></li>
                <li className="nav-link"><a href="#">News</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
            </ul>
            <button className="get-started-btn">Get Started</button>
            <div className='hamburger-container'>
                <Hamburger className="hamburger-btn" toggled={isOpen} toggle={setOpen} direction="right" color="white"size={20}/>
            </div>
        </nav>
        <div className={`nav-links-mobile-container ${isOpen ? "show" : "hide"}`}>
            <ul className={`nav-links-mobile `}>
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">About</a></li>
                <li className="nav-link"><a href="#">Services</a></li>
                <li className="nav-link"><a href="#">Blogs</a></li>
                <li className="nav-link"><a href="#">News</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
            </ul>
        </div>
        </div>
    );
}

export default Navbar;
