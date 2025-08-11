import React from 'react'
import './Portfolio.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    { title: "PuppyPal", 
      img: '/puppypal.jpeg', 
      link: "https://github.com/martadebrina/DogManagementApp",
      description: "Java-based app to track your dog's health, routines, and vet records.",
    },
    { title: "InsightUBC", 
      img: '/insightUBC.jpeg',
      link: "https://github.com/martadebrina/insightUBCteam",
      description: "TypeScript-based UBC course query engine with custom filtering, transformation, and visualization."
    },
    { title: "Salt Marsh Study", 
      img: '/seasalt.jpeg',
      link: "https://drive.google.com/drive/folders/14Pw-W2l-S8T2niB_Uikm6TlUV84a7gqy?usp=sharing",
      description: "A group research project on sedimentation-vegetation relation in salt marshes at Wreck Beach."
    }
  ];

const Portfolio = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    { breakpoint: 890, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
  };

  return (
    <div className='portfolio'>
      <h1>My Projects</h1>
      <div className="projects">
      <Slider {...settings}>
        {projects.map((d) => (
          <div className='project'>
            <div>
              <img src={d.img} alt="" />
            </div>

            <div className="project-content">
              <h2>{d.title}</h2>
              <p className="project-description">{d.description}</p>
              <div className="button-container">
                <button onClick={() => window.open(d.link, "_blank")}>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    
  )
}

export default Portfolio