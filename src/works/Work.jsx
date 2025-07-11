import React, { useState } from 'react';
import './work.css';
import p1 from '../works/p1img.png';
import p2 from '../works/p2image.png';
import p3 from '../works/p3img.png';
import p4 from '../works/p4img.png';
import p5 from '../works/p5image.png';
import p6 from '../works/p6img.png';
import p1be from '../works/p1be.png';
import p2be from '../works/p2be.png';
import p3be from '../works/p3be.png';
import p4be from '../works/p4be.png';
import p5be from '../works/p5be.png';
import p6be from '../works/p6be.png';
export const Work = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendProjects = [
    {
      number: 1,
      title: 'PhoneSpot (React Shopping website)',
      description: 'Developed a fully responsive shopping website using React.js to purchase mobile phones from all major brands. Implemented cart management functionality for adding and removing products and integrated brand filtering options for an enhanced user experience. Designed with a clean UI to ensure easy navigation and seamless shopping flow.',
      image: p1,
      tools: ['React', 'API'],
      live: ' https://phonespot.netlify.app/',
      source: 'https://github.com/zubairahamad06/Zdashboard/',
    },
    {
      number: 2,
      title: 'Web D Dashboard',
      description: 'Built a comprehensive dashboard for Web D School using a Bootstrap template to manage all institute data efficiently. The dashboard allows admin to manage student and teacher information, track fee details, and organise overall institutional records in a structured and user-friendly interface.',
      image: p2,
      tools: ['Bootstrap', 'Html', 'Css', 'Javascript'],
      live: 'https://zubairahamad06.github.io/Zdashboard/',
      source: 'https://github.com/zubairahamad06/Zdashboard',
    },
    {
      number: 3,
      title: 'Best Coffee',
      description: 'Created a responsive multipage website for a coffee shop to showcase their brand and offerings. Each page displays dedicated content, including the menu, gallery, about, and contact sections, providing visitors with a complete overview of the shop in a clean and attractive layout.',
      image: p3,
      tools: ['Html', 'Css', 'Javascript'],
      live: 'https://zubairahamad06.github.io/Coffee-Website/',
      source: 'https://github.com/zubairahamad06/Coffee-Website',
    },
    {
      number: 4,
      title: 'Furniture Website',
      description: 'Developed a responsive single-page website for a furniture store to showcase their products and store information in one place. Designed with smooth navigation to present all details clearly, including store introduction and product highlights, for a seamless user experience.',
      image: p4,
      tools: ['Html', 'Css'],
      live: 'https://zubairahamad06.github.io/Furniture-Website/',
      source: 'https://github.com/zubairahamad06/Furniture-Website',
    },
    {
      number: 5,
      title: 'WordPress(Multipage)',
      description: 'Built a single-page hospital website using WordPress to showcase the hospital’s facilities and services. Designed with a clean and professional layout highlighting features such as departments, treatments offered, and contact details for better patient engagement and accessibility.',
      image: p5,
      tools: ['WordPress'],
      live: 'https://zubairahamad06.github.io/Wordpress_Multipage/',
      source: 'https://github.com/zubairahamad06/Wordpress_Multipage',
    },

    {
      number: 6,
      title: 'WordPress(Single Page)',
      description: 'Developed a multipage website using WordPress for a car repair and maintenance service. The website includes dedicated pages for services, about, contact, and booking, providing customers with complete information and easy access to the garage’s offerings in a professional layout.',
      image: p6,
      tools: ['WordPress'],
      live: 'https://zubairahamad06.github.io/Wordpress_singlepage/',
      source: 'https://github.com/zubairahamad06/Wordpress_singlepage',
    },
  ];

  const backendProjects = [
    {
      number: 1,
      title: 'Mern Crud',
      description: 'A full-stack web application that allows users to create, read, update, and delete book reviews. Built using React, CSS, and JavaScript on the frontend, with Node.js, Express, and MongoDB handling the backend and database operations',
      image: p1be,
      tools: ['Node.js', 'Express', 'MongoDB'],
      live: 'merncrudproject.netlify.app',
      source: '#',
    },
    {
      number: 2,
      title: 'Hotel Booking(Firebase)',
      description: 'Built a hotel booking application using Firebase as the backend to manage data in real-time. Implemented a booking form where user details are stored in the database and displayed instantly below the form. Added features such as search, edit, and delete to manage bookings efficiently with a smooth user experience.',
      image: p2be,
      tools: ['Firebase', 'Html', 'Css'],
      live: 'https://zubairahamad06.github.io/Hotel-Booking/',
      source: 'https://github.com/zubairahamad06/Hotel-Booking',
    },
    {
      number: 3,
      title: 'University Website (With Data Project ) ',
      description: 'Developed a university website using Node.js, Express, and MongoDB. Implemented a registration form where user data is stored securely in the database and displayed on a dedicated data page for users to view their submitted details. Designed for seamless data flow with a clean and organised interface.',
      image: p3be,
      tools: ['Node.js', 'Express', 'MongoDB'],
      source: 'https://github.com/zubairahamad06/With-Data-Project',
      live: 'https://with-data-project.onrender.com',
    },
    {
      number: 4,
      title: 'Blood Donation Website (Without Data Project)',
      description: 'Built a blood donation website using Node.js, Express, and MongoDB. Implemented a donor registration form where submitted data is stored securely in MongoDB, and users are redirected to a thank you page upon submission. Designed with admin authentication to ensure only admins can view and manage donor data efficiently.',
      image: p4be,
      tools: ['Node.js', 'Express', 'MongoDB'],
      source: '#',
      live: 'https://withoutdata-project.onrender.com',
    },
    {
      number: 5,
      title: 'To-Do-List',
      description: 'Developed a full stack to-do list app using JavaScript and Firebase for real-time task management. Users can add, update, and delete tasks with data stored securely in Firebase, enabling efficient daily task tracking with a simple and intuitive interface.',
      image: p5be,
      tools: ['Html', 'Css', 'Javascript', 'Firebase'],
      live: 'https://zubairahamad06.github.io/To-do-list/',
      source: 'https://github.com/zubairahamad06/To-do-list',
    },

    {
      number: 6,
      title: 'QR Generator',
      description: 'Developed a full stack to-do list app using JavaScript and Firebase for real-time task management. Users can add, update, and delete tasks with data stored securely in Firebase, enabling efficient daily task tracking with a simple and intuitive interface.',
      image: p6be,
      tools: ['Node.js', 'Express.js', 'Nodemon'],
      live: 'https://qr-project-zfx7.onrender.com',
      source: 'https://github.com/zubairahamad06/QR-Project',
    },
  ];

  return (
    <div className="project-container" id="projects">
      <h2 className="section-title">PROJECTS</h2>

      <div className="tab-buttons">
        <button
          className={`tab-btn ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          Frontend Projects
        </button>
        <button
          className={`tab-btn ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          Backend Projects
        </button>
      </div>

      {activeTab === 'frontend' && (
        <div className="frontend">
          {frontendProjects.map((project, index) => (
            <div className="project-content" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="project-image-wrapper desktop-only">
                    <div className="image-box">
                      <img src={project.image} alt="Project" className="project-image" />
                    </div>
                  </div>

                  <div className="project-text">
                    <h3 className="project-number">Project {project.number}</h3>
                    <div className="project-image-wrapper mobile-only">
                      <div className="image-box">

                        <img src={project.image} alt="Project" className="project-image" />
                      </div>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="tools">
                      <p className="tools-label">Tools used -</p>
                      <div className="tools-links">
                        {project.tools.map((tool, i) => (
                          <React.Fragment key={i}>
                            <div className="tools-link">
                              <span>{tool}</span>
                            </div>
                            {i !== project.tools.length - 1 && <div className="tools-divider">|</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-buttons">
                      <a href={project.live} className="btn yellow-btn" target="_blank" rel="noopener noreferrer">Live View ↗</a>
                      <a href={project.source} className="btn outline-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="project-text">
                    <h3 className="project-number">Project {project.number}</h3>
                    <div className="project-image-wrapper mobile-only">
                      <div className="image-box">

                        <img src={project.image} alt="Project" className="project-image" />
                      </div>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="tools">
                      <p className="tools-label">Tools used -</p>
                      <div className="tools-links">
                        {project.tools.map((tool, i) => (
                          <React.Fragment key={i}>
                            <div className="tools-link">
                              <span>{tool}</span>
                            </div>
                            {i !== project.tools.length - 1 && <div className="tools-divider">|</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-buttons">
                      <a href={project.live} className="btn yellow-btn" target="_blank" rel="noopener noreferrer">Live View ↗</a>
                      <a href={project.source} className="btn outline-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                  </div>

                  <div className="project-image-wrapper desktop-only">
                    <div className="image-box">
                      <img src={project.image} alt="Project" className="project-image" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'backend' && (
        <div className="backend">
          {backendProjects.map((project, index) => (
            <div className="project-content" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="project-image-wrapper desktop-only">
                    <div className="image-box">
                      <img src={project.image} alt="Project" className="project-image" />
                    </div>
                  </div>

                  <div className="project-text">
                    <h3 className="project-number">Project {project.number}</h3>
                    <div className="project-image-wrapper mobile-only">
                      <div className="image-box">

                        <img src={project.image} alt="Project" className="project-image" />
                      </div>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="tools">
                      <p className="tools-label">Tools used -</p>
                      <div className="tools-links">
                        {project.tools.map((tool, i) => (
                          <React.Fragment key={i}>
                            <div className="tools-link">
                              <span>{tool}</span>
                            </div>
                            {i !== project.tools.length - 1 && <div className="tools-divider">|</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-buttons">
                      <a href={project.live} className="btn yellow-btn" target="_blank" rel="noopener noreferrer">Live View ↗</a>
                      <a href={project.source} className="btn outline-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="project-text">
                    <h3 className="project-number">Project {project.number}</h3>
                    <div className="project-image-wrapper mobile-only">
                      <div className="image-box">

                        <img src={project.image} alt="Project" className="project-image" />
                      </div>
                    </div>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="tools">
                      <p className="tools-label">Tools used -</p>
                      <div className="tools-links">
                        {project.tools.map((tool, i) => (
                          <React.Fragment key={i}>
                            <div className="tools-link">
                              <span>{tool}</span>
                            </div>
                            {i !== project.tools.length - 1 && <div className="tools-divider">|</div>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-buttons">
                      <a href={project.live} className="btn yellow-btn" target="_blank" rel="noopener noreferrer">Live View ↗</a>
                      <a href={project.source} className="btn outline-btn" target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                  </div>

                  <div className="project-image-wrapper desktop-only">
                    <div className="image-box">
                      <img src={project.image} alt="Project" className="project-image" />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
