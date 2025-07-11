import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneVolume, faLocationDot, faLink } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_32slh55',    
      'template_q4w3iwf',   
      form.current,
      'jeoi0OkD-0ea46wU0'     
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      form.current.reset(); 
    }, (error) => {
      console.log(error.text);
      alert("An error occurred, please try again.");
    });
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">CONTACT</h2>
      <h4 className="contact-subtitle">Looks like you’re trying to contact me…</h4>
      <h3 className="reach-out">REACH OUT !!!</h3>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-block">
            <div className="g1">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <h4>Email Address</h4>
            </div>
            <p>zubairahamadmb@gmail.com</p>
          </div>

          <div className="info-block">
            <div className="g1">
              <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
              <h4>Phone Number</h4>
            </div>
            <p>+91 8925341659</p>
          </div>

          <div className="info-block">
            <div className="g1">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <h4>Location</h4>
            </div>
            <p>Madurai, Tamil Nadu</p>
          </div>

          <div className="info-block">
            <div className="g1">
              <FontAwesomeIcon icon={faLink} className="icon" />
              <h4>Connect With Me</h4>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/zubair
-ahamad-b624b5268/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href="https://www.instagram.com/zubair_ahamad_06/?hl=en" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href="https://wa.me/918925341659" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your Name" required />

          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your Email" required />

          <label>Contact Number (Optional)</label>
          <input type="tel" name="user_phone" placeholder="Enter your Phone Number" />

          <label>Message</label>
          <textarea name="message" placeholder="Enter your Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
