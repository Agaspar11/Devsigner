import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Landing from './view/Landing'
import About from './view/About'
import Community from './view/Community'
import Learn from './view/Learn'

export default function App() {
  return (
    <>
    <Navbar />
    <div className='about-footer'>
    <Landing />
    <About />
    <Community />
    <Learn />
    </div>
    </>
  )
}
