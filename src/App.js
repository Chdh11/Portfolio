import './App.css';
import github from './icons/github.png'
import kaggle from './icons/kaggle.png'
import linkedin from './icons/linkedin.png'
import medium from './icons/medium.png'
import me from './icons/me.jpeg'
import cat from './icons/cat.jpg'
import gmail from './icons/gmail.png'
import SlidingWindow from './components/ProjectSlider';
import MovingTabs from './components/ProjectSlider';
import ProjectSlider from './components/ProjectSlider';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <div className="container">

        {/* Sidebar */}
        <div className="sidebar">
          <img src={cat} alt='Chhavi Dhankhar' className='mypic'/>
          <div className='intro'>
            <h1>Chhavi Dhankhar</h1>
            <span>I'm a tech enthusiast with a knack for Data Science, Machine Learning, and Web-Dev. Skilled at problem-solving and making data-driven decisions, I'm eager to collaborate on projects that match our interests. Let's connect and build something awesome together!</span>
          </div>
          <a href="https://github.com/Chdh11/Portfolio/raw/main/Chhavi_Dhankhar_Resume.pdf" download="Chhavi_Dhankhar_Resume.pdf"><button>Download Resume</button></a>
          <div className='socials'>
              <a href='https://github.com/Chdh11' target='_blank'><img src={github} alt='Github'/></a>
              <a href='https://www.linkedin.com/in/chhavi-dhankhar-a488a9228/' target='_blank'><img src={linkedin} alt='Github'/></a>
              <a href='https://www.kaggle.com/chhavidhankhar11' target='_blank'><img src={kaggle} alt='Github'/></a>
              <a href='https://medium.com/@chhavidhankhar07' target='_blank'><img src={medium} alt='Github'/></a>
          </div>
        </div>


        <nav>
        <div className="main-content">
          <div class="skills">
          <span className='heading'>Skills</span>
          <a href='' target='_blank' ><button className='explore-projects'>Explore More</button></a>
          <div className='skill-tabs'>
          <Skills />
          </div>
          </div>

          <div class="projects">
          <span className='heading'>Projects</span>
          <a href='' target='_blank' ><button className='explore-projects'>Explore More</button></a>
          <div className='project-tabs'>
          <ProjectSlider />
          </div>
          </div>

          {/* Contact section */}
          <div class="contact">
              <span className='heading'>Get in Touch</span>
              <div className='email-info'>
              <img src={gmail} alt='gmail'/> <span>chhavidhankhar07@gmail.com</span>
              </div>
              <form id="contact-form" class="form-grid">
                <div class="form-group" >
                  <input type="text" id="name" name="name" placeholder='Name' required />
                </div>
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder='Email' required />
                </div>
                <div class="form-group">
                  <textarea id="message" name="message" rows="4" placeholder='Message' required></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
          </div>


        </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
