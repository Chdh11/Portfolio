import React from 'react';
import linkedin from './linkedin.png'
import github from './github.png'
import kaggle from './kaggle.png'
import medium from './medium.png'
import arrow from './Arrow.png'
import './Home.css'
import Projects from './Projects';
import Contact from './Contact';
import Blogs from './Blogs';
import Skills from './Skills';
import About from './About'
import { color,motion } from 'framer-motion';


function Home() {
  return (
    <div style={{backgroundColor:"black"}}>
      <div className='container'>
        {/* <div className='sidebar'>
          <a href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='_blank'><img src={linkedin}/></a>
          <a href='https://github.com/Chdh11' target='_blank'><img src={github}/></a>
          <a href='https://www.kaggle.com/chhavidhankhar11' target='_blank'><img src={kaggle}/></a>
          <a href='https://medium.com/@chhavidhankhar07' target='_blank'><img src={medium}/></a>
        </div> */}
        <div className='topbar'>
          <ul>
              <a href="#about" style={{textDecoration:'None',color:'black'}}><li>About</li></a>
              {/* <a href="#skills" style={{textDecoration:'None',color:'black'}}><li>Skills</li></a> */}
              <a href="#projects" style={{textDecoration:'None',color:'black'}}><li>Projects</li></a>
              <a href="#blogs" style={{textDecoration:'None',color:'black'}}><li>Blogs</li></a>
              <a href="#contact" style={{textDecoration:'None',color:'black'}} ><li>Contact</li></a>
          </ul>
        </div>
        <div className='content'>
          <div className='description'>
            <h1 style={{fontSize:"40px"}}>Hello, I'm </h1>
            <h1 style={{fontSize:"120px"}}>Chhavi Dhankhar</h1> 
            <h1 style={{textAlign:"right",fontSize:"40px"}}>I'm a <span >Developer</span></h1>
          <p style={{textAlign:"center", marginTop:"160px"}} >Get to know Me</p>
          <motion.div
              animate={{ y: ["0%", "-25%", "0%"] }} 
              transition={{
                  duration: 0.8, 
                  repeat: Infinity, 
                  repeatType: "loop",
                  ease: "easeInOut", 
              }}>
        <img src={arrow} style={{height:"20px",width:"35px",marginLeft:"48%"}}/>
        </motion.div>
              {/* <h1><span style={{fontSize:"85px"}}>C</span>HHAVI DHANKHAR</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam laudantium expedita autem necessitatibus eius iste, voluptate dolorum fugiat unde fugit eum, temporibus in beatae. Quas, provident sed. Illum veniam id eos </p>
              <p>iste odit quos repellendus reprehenderit? Corporis vero, vel nihil earum quaerat pariatur suscipit neque voluptatibus harum, debitis numquam quisquam, optio veritatis delectus praesentium in. Culpa recusandae laborum sed quidem blanditiis accusamus repudiandae.</p>
              <a href="https://github.com/Chdh11/Portfolio/raw/main/Chhavi_Dhankhar_Resume.pdf" download="Chhavi_Dhankhar_Resume.pdf"><button><span>Download Resume</span></button></a>
          </div>
          <div className='my-pic'>
              <img src={haha}/> */}
          </div>
        </div>
      </div>
      <div className='section2'>
      <div className='section3'><About/></div>
      <div className='section3'><Skills/></div>
      <div className='section4'><Projects /></div>
      <div className='section5'><Blogs /></div>
      <div className='section6'><Contact/></div>
      </div>
      
    </div>
  );
}

export default Home;
