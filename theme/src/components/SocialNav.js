import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const SocialNav = () => (
  <nav className="social-navigation" aria-label="Social Menu">
    <div className="menu-social-container">
      <ul
        id="menu-social"
        className="list-none flex"
      >
        <li
          id="menu-item-351"
          
        >
          <a className="h-6" href="http://twitter.com/scottbolinger">
            <span className="screen-reader-text">Twitter</span>
           <FaTwitter />
          </a>
        </li>
        <li
          id="menu-item-352"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-352"
        >
          <a href="http://dribbble.com/richtabor">
            <span className="screen-reader-text">Dribbble</span>
            
          </a>
        </li>
        <li
          id="menu-item-353"
          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-353"
        >
          <a href="https://medium.com/@richtabor">
            <span className="screen-reader-text">Medium</span>
            
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default SocialNav;
