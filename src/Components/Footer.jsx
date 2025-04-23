import React from 'react';
import '../Styles/Footer.css'; 
import TsLogo from '../assets/ts-logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className='footer-top'>
            <div className='footer-left'>
                <img src={TsLogo} alt='ts-logo' />
                <p>
                    Want to build the future with us? <br />
                    follow T²C and make an impact!
                </p>

                <div className='social-icons'>
                    <a href='#'><FaLinkedin className='social-icon'/></a>
                    <a href='#'><FaTwitter className='social-icon'/></a>
                    <a href='#'><FaDiscord className='social-icon'/></a>
                    <a href='#'><FaMedium className='social-icon'/></a>
                </div>
            </div>
            <div className='footer-right'>
                <div className='footer-product'>
                    <p>Product</p>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Faq</a>
                    <a href='#'>Why Choose</a>
                    <a href='#'>Contact</a>
                </div>
                <div className='footer-company'>
                    <p>Company</p>
                    <a href='#'>Vision</a>
                    <a href='#'>Mission</a>
                    <a href='#'>Values</a>
                    <a href='#'>Team</a>
                </div>
            </div>
        </div>
      
       <hr />
       <div className='footer-bottom'>
            <div className='footer-bottom-left'>
                <p>© 2024 TSquaredC  |  All Rights Reserved.</p>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
       </div>
       
      </div>
    </footer>
  );
};

export default Footer;

