import React from 'react'
import './service.css'
import fe from '../services/fe1.png'
import be from '../services/be1.png'
import ui from '../services/ui1.png'

export const Service = () => {
  return (
    <div className="services-section">
      <h3><span>My</span> Services</h3>
      <div className="services-container">
        <div className="service-card">
          <img src={fe} alt="" />
          <h2>Frontend Development</h2>
          <p>
            Experienced in building clean, responsive UIs using HTML, CSS, JavaScript, and React — focused on intuitive design and smooth user experience.
          </p>
        </div>

        <div className="service-card">
          <img src={be} alt="" />
          <h2>Backend Development</h2>
          <p>
            Skilled in building scalable and efficient backends using Node.js, Express, and MongoDB — focused on APIs, database management, and smooth data flow.
          </p>
        </div>

        <div className="service-card">
          <img src={ui} alt="" className='ui' />
          <h2 className='h2'>UX/UI Design</h2>
          <p>
            Focused on user-first design — creating clean interfaces and seamless experiences backed by thoughtful wireframes and prototypes.
          </p>
        </div>
      </div>
    </div>
  )
}
