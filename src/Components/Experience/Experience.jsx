import React from "react";
import "./Experience.css";
const items = [
  {
    role: "Undergraduate Research Assistant @ UBC",
    date: "May 2024 – Aug. 2024",
    desc: [
      "Researched how AI tools can support student understanding of complex topics in physics. Analyzed student time-on-task data using Python (pandas, matplotlib) to identify problem trends."
    ]
  },
  {
    role: "Undergraduate Teaching Assistant @ UBC",
    date: "Sep. 2024 – Apr. 2025",
    desc: [
      "Led physics labs using Python/Jupyter for data analysis, coding practice, problem-solving applications. Supported students via office hours, Piazza Q&A, and coordinated with instructors/TAs through Slack."
    ]
  },
  {
    role: "AI & Robotics Summer Program @ Suzhou Vocational Institute of IT",
    date: "May 2023 – Jul. 2023",
    desc: [
      "Participated in a government-sponsored summer program focused on AI, robotics, and emerging technologies. Gained hands-on experience in microcontroller programming, robot mechanics, and basic machine learning. Developed practical skills in applying technology concepts to real-world engineering challenges."
    ]
  }
];


export default function Experience() {
  return (
    <section id="experience" className="xp">
      <h2 className="xp-title">Experiences</h2>

      <ul className="xp-list">
        {items.map((it) => (
          <li key={it.role} className="xp-item">
            <h3 className="xp-role">{it.role}</h3>
            <p className="xp-date">{it.date}</p>
            <p className="xp-desc">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
