import React, { useState } from 'react';
import './styles.css';
import logo from '../img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-cont">
        <div className='logo'>
          <img src={logo} alt='devsigner logo' />
        </div>
        <div className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <a href='#'><li>About us</li></a>
            <a href='#'><li>Community</li></a>
            <a href='#'><li>Learn</li></a>
            <a href='#'><li>Upcoming</li></a>
            <a href='#'><li>Team</li></a>
            <a href='#'><li>Contacts</li></a>
          </ul>
        </div>
        <div className={`connect ${isMenuOpen ? 'open' : ''}`}>
          <a href="#">Connect Now</a>
        </div>
        <div className="burger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>
    </nav>
  );
}
