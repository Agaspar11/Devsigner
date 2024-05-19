import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './styles.css'
import logo from '../img/logo.png';

export default function Landing() {
  return (
    <section className='main-cont'>
        <div className='left-land'>
            <h1>Join the Devsigner Community Today!</h1>
            <p>Discover the latest trends, connect with fellow tech enthusiast, and take your development and design skills to the next level.</p>
            <div className="land-button">
                <div className="left-btn">
                    <a href="#">Join</a>
                </div>
                <div className="right-btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <div className="land-contact">
                <SocialIcon url="https://facebook.com/in/couetilc" />
                <SocialIcon url="https://instagram.com/in/couetilc" />
                <SocialIcon url="https://x.com/in/couetilc" />
                <SocialIcon url="https://linkedin.com/in/couetilc" />
                <SocialIcon url="https://discord.com/in/couetilc" />
            </div>
        </div>

        <div className="right-land">
            <img src={logo} alt='devsigner logo' />
        </div>
    </section>
  )
}
