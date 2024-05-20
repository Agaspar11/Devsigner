import React from 'react'
import './styles.css'
import about from '../img/about.jpeg';

export default function About() {
  return (
    <section className='about'>
        <div className="about-cont">
            <div className="about-img">
                <img src={about} alt="devsigner people" />
            </div>
            <div className="about-details">
                <h1>About <span>Devsigner</span> Community</h1>
                <p>At Devsigner Community, we believe in fostering collaboration, sharing knowledge, and inspiring creativity. Join us to connect with like-minded people, stay updated with the latest trends, and take your design and development skills to the next level.</p>
            </div>
        </div>
    </section>
  )
}
