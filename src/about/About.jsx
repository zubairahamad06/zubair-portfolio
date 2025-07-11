import React, { useState } from 'react';
import './about.css';
import myimg from '../about/aboutmeimg.jpeg';


export const About = () => {
  const [activeSection, setActiveSection] = useState('education'); 

  return (
    <div className='about' id='about-us'>
      <img src={myimg} alt="Profile" className="profile-img" />

      <div className="about-section">
        <h2>ABOUT ME</h2>
        <h3>Developer <span>& Designer</span></h3>
        <p>
          I'm Zubair Ahamd, a passionate MERN stack developer skilled in React, Node.js, and MongoDB.
          I love crafting responsive, user-friendly web applications with clean and efficient code.
          A fast learner and team player, I'm always eager to explore new technologies and grow.
        </p>
        <div className="buttons">
          <button
            className={`btn ${activeSection === 'education' ? 'yellow' : 'outline'}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button
            className={`btn ${activeSection === 'certification' ? 'yellow' : 'outline'}`}
            onClick={() => setActiveSection('certification')}
          >
            Certification
          </button>
        </div>



        {activeSection === 'education' && (
          <div className="edu-cert-section">
            <div className="card">
              <p>2020-2024</p>
              <h3>B.E - Computer Science & Engineering <span>8.33 CGPA</span></h3>
              <p>Sethu Institute of Technology - Madurai</p>
            </div>
            <div className="card">
              <p>2019-2020</p>
              <h3>HSC <span>66%</span></h3>
              <p>Sri Krishna Matriculation HSS - Pattukkottai</p>
            </div>
            <div className="card">
              <p>2017-2018</p>
              <h3>SSLC <span>92%</span></h3>
              <p>Sri Krishna Matriculation HSS - Pattukkottai</p>
            </div>
          </div>
        )}

        {activeSection === 'certification' && (
          <div className="edu-cert-section">
            <div className="card">
              <p>2024 - 2025</p>
              <h3>Full Stack Development - MERN</h3>
              <p>Web D School - Chennai</p>
            </div>
            <div className="card">
              <p>April 2024 - May 2024</p>
              <h3>Certification in C language</h3>
              <p>Cognifyz Technologies</p>
            </div>
            <div className="card">
              <p>Feb 2023 - Apr 2023</p>
              <h3>Certification in IOT</h3>
              <p>Tarcin Robotics</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
