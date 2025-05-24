import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

export default function Skills() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: '1', title: 'Programming Languages', subtitle: 'React.js, HTML, CSS, JavaScript, Bootstrap' },
    { id: '2', title: 'Full Stack Development', subtitle: 'C#, .NET, RESTful APIs, GraphQL' },
    { id: '3', title: 'Data Science & Machine Learning Applications', subtitle: 'Python, R, Jupyter Notebook, Streamlit' },
    { id: '4', title: 'Database Management', subtitle: 'MySQL, OracleDB, SQL Server' }
  ];

  return (
    <div className="skills-container" id="skills">
      <div className="skills-title">Skill-Set</div>

      <div className="stair-container">
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="step"
          >
            <motion.p >{item.title}</motion.p>
            
          </motion.div>
        ))}
      </div>
      <div className='tap'>Tap to open a card</div>
    </div>
  );
}
