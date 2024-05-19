import React from 'react'
import './styles.css'
import logo from '../img/logo.png';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
          <img src={logo} alt='devsigner logo' />
      </div>
      <div className='nav-list'>
          <ul>
            <a href='#'><li>About us</li></a>
            <a href='#'><li>Community</li></a>
            <a href='#'><li>Learn</li></a>
            <a href='#'><li>Upcoming</li></a>
            <a href='#'><li>Team</li></a>
            <a href='#'><li>Contacts</li></a>
          </ul>
      </div>
      <div className="connect">
        <a href="#">Connect Now</a>
      </div>
    </nav>
  )
}
