import React from 'react'
import './education.css'

export const Education = () => {
  return (
    <div className='body'> 
      <div className="container-edu">
        <div className="section">
          <h2>Education</h2>
          <div className="card">
            <p>2020-2024</p>
            <h3>B.E - Computer Science & Engineering <span>8.33 CGPA</span></h3>
            <p>Sethu Institute of Technology - Madurai</p>
          </div>
          <div className="card">
            <p>2019-2020</p>
            <h3>HSC <span>66%</span></h3>
            <p>Sri Krishna Matriculation Higher Secondary School - Pattukkottai</p>
          </div>
          <div className="card">
            <p>2017-2018</p>
            <h3>SSLC <span>92%</span></h3>
            <p>Sri Krishna Matriculation Higher Secondary School - Pattukkottai</p>
          </div>
        </div>

        <div className="section">
          <h2>Certifications</h2>
           <div className="card">
            <p>2024 - 2025</p>
            <h3>Full Stack Development - Mern stack</h3>
            <p>Web D School - Chennai</p>
          </div>
          <div className="card">
            <p>April 2024 - May 2024</p>
            <h3>Certification in C language</h3>
            <p>Cognifyz Technologies</p>
          </div>
          <div className="card">
            <p>February 2023 - April 2023</p>
            <h3>Certification in IOT</h3>
            <p>Tarcin Robotics</p>
          </div>
        </div>
      </div></div>
  )
}
