import React, { useState } from 'react';
import './ProjectSlider.css';
import github from './github.png'

const projects = [
  { id: 1, name: 'Pomodoro Timer', description: 'The Pomodoro Timer is a React JS project designed to enhance productivity using the Pomodoro Technique. It features a customizable timer that alternates between focused work sessions and short breaks, helping users maintain concentration and manage their time effectively. The intuitive interface allows users to start, pause, and reset the timer with ease.' ,url:'https://github.com/Chdh11/Pomodoro-timer',backgroundImage: 'url("pomo.png")'},
  { id: 2, name: 'Calculator', description: 'Description of Project 2',url:'https://github.com/Chdh11/Calculator-ReactJS'},
  { id: 3, name: 'TOPSIS Python Package', description: 'Description of Project 3',url:'https://github.com/Chdh11/Topsis-Chhavi-102103605' },
  { id: 4, name: 'Sentiment Analysis Dashboard', description: 'Description of Project 4',url:'https://github.com/Chdh11/Sentiment_Analysis_Dashboard' },
  { id: 5, name: 'Notes App', description: 'Description of Project 5',url:'https://github.com/Chdh11/Notes-app-ReactJS' },
  
];

const ProjectSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex < projects.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
  <div className="slider-container">
    <div className="slider">
      <button className="prev" onClick={handlePrevClick} disabled={startIndex === 0}>◀</button>
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
      >
        {projects.map((project, index) => (
          <div className="project" key={project.id} >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target='_blank'><img src={github} alt='Github'/></a>
          </div>
        ))}
      </div>
      <button className="next" onClick={handleNextClick} disabled={startIndex >= projects.length - itemsToShow}>▶</button>
    </div>
  </div>
);

    
};

export default ProjectSlider;
