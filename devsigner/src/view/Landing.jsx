import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import './styles.css';
import { FaXTwitter } from "react-icons/fa6";
import logo from '../img/logo.png';

export default function Landing() {
  return (
    <section className='main-cont'>
      <div className='left-land'>
        <h1>Join the <span>Devsigner</span> Community Today!</h1>
        <p>Discover the latest trends, connect with fellow tech enthusiasts, and take your development and design skills to the next level.</p>
        <div className="land-button">
          <div className="left-btn">
            <a href="#">Join</a>
          </div>
          <div className="right-btn">
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="land-contact">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} color="#1877F2" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={29} color="#E4405F" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={27} color="#000000" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} color="#0077B5" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={30} color="#5865F2" />
          </a>
        </div>
      </div>
      <div className="right-land">
        <img src={logo} alt='devsigner logo' />
      </div>
    </section>
  );
}
