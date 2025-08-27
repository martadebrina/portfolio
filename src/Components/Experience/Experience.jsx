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
                        <li> Led physics labs using Python/Jupyter for data analysis, guiding students with coding and problem-solving. </li>
                        <li> Assisted students during office hours and responded to questions on Piazza to support their learning.</li>
                        <li> Collaborated with TA team and instructors via Slack to coordinate and solve challenges.</li>
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
                            <li> Researched how AI tools can support student understanding of complex topics in physics. </li>
                            <li> Analyzed student time-on-task data using Python (pandas, matplotlib) to identify problem trends. </li>
                            <li> Designed lesson plans and problem sets based on engagement patterns and analysis results.</li>
                        </ul>
                    </p>
                    <span className='right-arrow'></span>
                </div>
            </div>
            <div className="container left">
                <div className="box">
                    <h4>AI & Robotics Summer Program  </h4>
                    <small>Suzhou Industrial Park Institute of Vocational Technology </small>
                    <p>
                        <ul>
                            <li> Participated in a government-sponsored summer program focused on AI, robotics, and emerging technologies. </li>
                            <li> Gained hands-on experience in microcontroller programming, robot mechanics, and basic machine learning.</li>
                            <li> Developed practical skills in applying technology concepts to real-world engineering challenges.</li>
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