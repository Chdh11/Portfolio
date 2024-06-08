import React from 'react';
import './Skills.css';
import python from './python.png'
import mysql from './mysql.png'
import git from './git.png'

const skills = [
    { id: 1, name: 'Python', url: python },
    { id: 2, name: 'MySQL', url: mysql },
    { id: 3, name: 'HTML & CSS', url: git },
    { id: 4, name: 'Git/Github', url: git },
    { id: 5, name: 'C++', url: git },
    { id: 6, name: 'C++', url: git },
    { id: 7, name: 'C++', url: git },
    { id: 8, name: 'C++', url: git },
    { id: 9, name: 'C++', url: git },
];

const Skills = () => {
    return (
        <div className="skill-container">
            {skills.map((skill) => (
                <div className="skill-item" key={skill.id}>
                    <img src={skill.url} alt={skill.name} />
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
