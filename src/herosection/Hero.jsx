import React, { useState, useEffect } from 'react'
import './portfolio.css'
import heroimg from '../herosection/myimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  const [activeTabs, setActiveTabs] = useState('my Skills');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = ['my Skills', 'my Experience', 'my Art'];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburger = document.querySelector('.hamburger');
      const navMobile = document.querySelector('.nav-mobile');

      if (hamburger && navMobile &&
        !hamburger.contains(event.target) &&
        !navMobile.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className='portfolio-container' id='home'>
      <header className="header">
        <div className="logo">Za<span className="dot">.</span></div>


        <nav className="nav">
          <span className="jump">Jump to</span>
          <span className="arrow">➞</span>
          <a href="#home">Home</a>
          <a href="#about-us">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="/zubair_resume.pdf" className="btn-cv" download>
          Download CV
        </a>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
          <span className="jump">Jump to</span>
          <span className="arrow">➞</span>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about-us" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a href="/path/to/cv.pdf" className="btn-cv" download>
            Download CV
          </a>
        </nav>
      </header>


      <div className="main-content">
        <div className="left-section">
          <p className="greeting">Hey, I am</p>
          <div className="whole-name">
            <h1 className="name">Zubair</h1>
            <div className="name-with-line">
              <div className="orange-line"></div>
              <span className="last-name">Ahamad</span>
            </div>
          </div>

          <a href="https://wa.me/918925341659" target="_blank"
            rel="noopener noreferrer">  <button className="contact-btn">
              contact me
            </button></a>

          <div className="socials">
            <p className="socials-label">my socials -</p>
            <div className="social-links">
              <div className="social-link">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                <a href="https://www.linkedin.com/in/zubair
-ahamad-b624b5268/
"><span>Linkedin</span></a>
              </div>
              <div className="social-divider">|</div>
              <div className="social-link">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                <a href="https://www.instagram.com/zubair_ahamad_06/?hl=en">  <span>Instagram</span></a>
              </div>
              <div className="social-divider">|</div>
              <div className="social-link">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <a href="https://github.com/zubairahamad06"> <span>Github</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="center-section">
          <div className="profile-wrapper">
            <div className="profile-circle">
              <div className="profile-inner">
                <div className="personal-image">
                  <img src={heroimg} alt="Zubair Ahamad" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="right-section">
          <div className="info-section">
            <div className="developer">
              <p className="fullstack-label">FULLSTACK</p>
              <h1 className="titlee">Web Developer</h1>
            </div>

          </div>
          <p className="description">
            I specialize in crafting dynamic, scalable web applications with a
            keen eye for responsive design. Passionate about delivering
            seamless user experiences through efficient code and
            innovative solutions
          </p>
          <div className="main-btns">

            <div className="hiresec">
              <a href="#contact"><button className='hire-btn'>Hire me</button></a>
            </div>
            <div className="proj">
              <a href="#projects"><button className='proj-btn'>My Projects</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}