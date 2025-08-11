import React from 'react'
import './Hero.css'
import durian from '../../assets/durian.png'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className="hero-top">
          <div className="hero-img"> <img src={durian} alt="Durian Mascot" className='mascot'/></div>
          <h2 className="hello">Hello! I’m</h2>
        </div>
        <h1 className="name">MARTA DEBRINA</h1>

        <div className="hero-buttons">
          <a href="/Resume.pdf" className="btn resume-btn" download>Resume</a>
          <a href="#portfolio" className="btn portfolio-btn">Projects</a>
        </div>
    </div>
  )
}

export default Hero