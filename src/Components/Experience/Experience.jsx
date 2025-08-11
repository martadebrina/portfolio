import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
        <h1>My Experiences</h1>
        <div className="timeline">
            <div className="container left">
                <div className="box">
                    <h2>Undergraduate Teaching Assistant </h2>
                    <small>University of British Columbia Faculty of Physics </small>
                    <ul className="bullets">
                        <li> Led tutorials and labs for first-year physics courses on mechanics, waves, and electromagnetism. </li>
                        <li> Assisted students during office hours and responded to questions on Piazza to support their learning.</li>
                        <li> Graded assignments and lab reports with clear, constructive feedback.</li>
                    </ul>
                    <span className='left-arrow'></span>
                </div>
            </div>
            <div className="container right">
                <div className="box">
                    <h3>Undergraduate Research Assistant  </h3>
                    <small>University of British Columbia Vantage College </small>
                    <p>
                        <ul>
                            <li> Created physics problems based on real-world scenarios to help students build problem-solving skills. </li>
                            <li> Developed lesson plans to guide students through applying physics concepts to real-life situations. </li>
                            <li> Researched how AI tools can support student understanding of complex topics in physics.</li>
                        </ul>
                    </p>
                    <span className='right-arrow'></span>
                </div>
            </div>
            <div className="container left">
                <div className="box">
                    <h4>Vocational Skill Training in AI & Robotics  </h4>
                    <small>Suzhou Industrial Park Institute of Vocational Technology </small>
                    <p>
                        <ul>
                            <li> Completed a 30-day training program sponsored by the Indonesian and Chinese governments. </li>
                            <li> Gained hands-on experience in microcontroller programming, robot mechanics, and basic machine learning.</li>
                            <li> Strengthened practical skills in applying technology concepts to real-world engineering challenges.</li>
                        </ul>
                    </p>
                    <span className='left-arrow'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience