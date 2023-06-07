
import React from 'react';
import './layout.css';
import { Outlet, Link } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="layout">
      <header>
        <div className="menu">
          <nav>
            <div className="logo">
              <img src="logo.png" alt="logo" />
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li className="dropdown">
                <a href="#">Link</a>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to="#">Dropdown 1</Link>
                    </li>
                    <li>
                      <Link to="#">Dropdown 2</Link>
                    </li>
                    <li>
                      <Link to="#">Dropdown 3</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <a href="#">Link</a>
              </li>

              <li>
                <a href="#">Link</a>
              </li>

              <li>
                <a href="#">Link</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer>
        <div className="logo_footer">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="icon-links">
          <a href="#" className="icon-link">
          
          </a>
          <a href="#" className="icon-link">
            <img src="icon2.png" alt="Icon 2" />
          </a>
          <a href="#" className="icon-link">
            <img src="icon3.png" alt="Icon 3" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
