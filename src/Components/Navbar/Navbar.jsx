import React from 'react'
import './Navbar.css'
import logo from '../../assets/durian.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
          <img src={logo} alt="logo" className='nav-logo' />
        </div>
        <ul className="nav-menu">
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <a href="#contact" className="nav-connect">Connect With Me</a>
    </div>
  )
}

export default Navbar