import React from 'react';
import Spline from '@splinetool/react-spline';
import { FiDownload } from "react-icons/fi";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* LEFT: text */}
      <div className="hero-left">
        <p className="hello">Hello!👋 I’m</p>
        <p className="name">MARTA DEBRINA</p>
        <p className="subtitle">CompScie &amp; Physics @ UBC</p>
        <a href="/Resume.pdf" className="btn-glass" download>Download My Resume <FiDownload /></a>
      </div>

      {/* RIGHT: 3D character */}
      <div className="hero-right">
        <div className="spline-frame">
          <Spline scene="https://prod.spline.design/534oBLDOfMffQdNh/scene.splinecode" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


