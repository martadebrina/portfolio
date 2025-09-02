import React from 'react';
import './Portfolio.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "TasteVan",
    img: "/tastevan.png",
    demo: "https://taste-van.com",
    repo: null,
    description:
      "FlutterFlow + Firebase web app for discovering Vancouver restaurants.",
    tags: ["FlutterFlow", "Firebase", "Maps"]
  },
  {
    title: "PuppyPal",
    img: "/puppypal.jpeg",
    demo: null,
    repo: "https://github.com/martadebrina/DogManagementApp",
    description:
      "Java-based app to track your dog's health, routines, and vet records.",
    tags: ["Java", "Android", "SQLite"]
  },
  {
    title: "InsightUBC",
    img: "/insightUBC.jpeg",
    demo: null,
    repo: "https://github.com/martadebrina/insightUBCteam",
    description:
      "TypeScript-based UBC course query engine with custom filtering, transformation, and visualization.",
    tags: ["TypeScript", "Node", "Query Engine"]
  },
  {
    title: "Salt Marsh Study",
    img: "/seasalt.jpeg",
    demo: "https://drive.google.com/drive/folders/14Pw-W2l-S8T2niB_Uikm6TlUV84a7gqy?usp=sharing",
    repo: null,
    description:
      "Group research on sedimentation–vegetation relation in salt marshes at Wreck Beach.",
    tags: ["Research", "Geospatial", "Data Viz"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="cards">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <div className="card-media">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>

            <div className="card-body">
              <div className="card-head">
                <h2 className="card-title">{p.title}</h2>
                <div className="card-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" title="Live demo">
                      <FiExternalLink />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" title="GitHub">
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>

              <p className="card-desc">{p.description}</p>

              <div className="card-tags">
                {p.tags?.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
