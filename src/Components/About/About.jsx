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
                    <p>Hi! I’m Marta, a student from Indonesia currently studying Computer Science and Physics at UBC Vancouver.</p>
                    <p>I’m passionate about building tech that’s thoughtful, educational, and grounded in real-world impact.</p>
                    <p>When I’m not coding or doing physics, I’m probably cooking, reading, fishing, or hunting for durian desserts.</p>
                </div>
                <div className="skills">
                <h3>Tech Stack</h3>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className='python'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='html'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='css'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='javacript'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="figma"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About