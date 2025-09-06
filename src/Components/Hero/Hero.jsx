import React from 'react';
import Spline from '@splinetool/react-spline';
import { FiDownload } from "react-icons/fi";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
  {/* LEFT: 3D character */}
  <div className="hero-left">
    <div className="spline-frame">
      <Spline scene="https://prod.spline.design/534oBLDOfMffQdNh/scene.splinecode" />
    </div>
  </div>

  {/* RIGHT: text */}
  <div className="hero-right">
    <p className="hello">Hello!👋 I’m</p>
    <p className="name">MARTA DEBRINA</p>
    <p className="subtitle">CompScie &amp; Physics @ UBC</p>
    <a href="/Resume.pdf" className="btn-glass" download>
      Download My Resume <FiDownload />
    </a>
  </div>
</section>

  );
};

export default Hero;


