import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
  return (
    <div className= 'about'>
        <div className="about-sections">
            <div className="about-left">
                <div className="speech-bubble">Nice to meet u!</div>
                <img src={profile_img} alt="Marta" className="profile-img" />
            </div>
            <div className="about-right">
                <h1 className="about-label">About me</h1>
                <div className="about-para">
                    <p>Hello! I’m Marta! I'm a fourth-year student at UBC Vancouver majoring in Computer Science & Physics, and I’m from Indonesia.</p>
                    <p>I’m interested in software development and enjoy exploring computer graphics, artificial intelligence & robotics. In physics, I’m especially into mechanics, dynamics, and computational physics, and I’m currently interested in quantum physics. I enjoy teaching too!</p>
                    <p>Also, I’m obsessed with dogs and I love cooking, fishing, and (of course) durian.</p>
                </div>
                <div className="skills">
                <h3>Tech Stack</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='python'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='html'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='css'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='javacript'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="figma"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
          
            </div>
            </div>
        </div>
    </div>
  )
}

export default About