import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaCaretSquareUp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-left">
            <p>Thanks for stopping by!</p>
            <div className="sosmed">
                <a
                    href="https://github.com/martadebrina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn github-btn"
                >
                <FaGithub size={15} />
                </a>

                <a
                    href="https://www.linkedin.com/in/marta-debrina-togatorop-9bb377240/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn github-btn"
                >
                <FaLinkedin size={15} />
                </a>
            </div>
        </div>
        <div className="footer-mid">Made by Marta © 2025 </div>
        <a href="#" className='top-button'>
            <FaCaretSquareUp size={40}/>
        </a>

    </div>
  )
}

export default Footer