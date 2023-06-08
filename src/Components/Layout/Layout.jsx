import React from "react";
import "./layout.css";
import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faGithub,
  
} from "@fortawesome/free-brands-svg-icons";


const Layout = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [renderer, setRenderer] = useState(false);
  useEffect(() => {
    setShowDropdown(false);
  }, [renderer]);
  return (
    <>
      <div className="layout">
        <div className="nav-bar">
          <Link to={"/"}>
            <img
              className="img-nav-bar"
              src="https://i.ibb.co/QYrHfrj/wave-logo-no-background.png"
            />
            <div className="img-nav-div"></div>
          </Link>
          <div className="left-nav">
            <div className="button-icon" >  
              <div className="icon-lay" >
              <Link to={"/upload"} > <FontAwesomeIcon  size="2x"  icon={faBroom}/> </Link>
              <Link to={"/login"} > <FontAwesomeIcon  size="2x" icon={faRightFromBracket} /> </Link>
              </div>              
              <button
              className="dropdown-button"
              onClick={() => setShowDropdown(() => !showDropdown)}
            >
              Menu
            </button>
            </div>
          </div>
        </div>
        {showDropdown && (
          <div className="nav-bar-mobile">
            <Link to={"/"}></Link>
            <div className="left-nav-mobile">
              <Link to="/" className="link-nav">
                Homepage
              </Link>
              <Link to="/about" className="link-nav">
                About Us
              </Link>
              <Link to="/profile" className="link-nav">
                Profile
              </Link>
              <Link to="/contact" className="link-nav">
                Contact Us
              </Link>
            </div>
          </div>
        )}

        <Outlet />

        <footer className="footer">
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </div>
          <ul className="footer-links">
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Layout;
