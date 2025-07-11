import React from 'react'
import './base.css'
import { faLinkedin,faInstagram,faWhatsapp,faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Base = () => {
  return (
 <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <h3 className="footer-name">
          Zubair <span className="highlight">Ahamad M B</span>
        </h3>
        <div className="footer-icons">
          <span className="footer-line-yellow"></span>
    <a href="https://www.linkedin.com/in/zubair
-ahamad-b624b5268/"><FontAwesomeIcon icon={faLinkedin} className='ficon'></FontAwesomeIcon></a>
   <a href="https://www.instagram.com/zubair_ahamad_06/?hl=en"><FontAwesomeIcon icon={faInstagram} className='ficon'></FontAwesomeIcon></a> 
    <a href="https://wa.me/918925341659"><FontAwesomeIcon icon={faWhatsapp} className='ficon'></FontAwesomeIcon></a>
    <FontAwesomeIcon icon={faXTwitter} className='ficon'></FontAwesomeIcon>
          <span className="footer-line-yellow"></span>
        </div>
        <p className="footer-copy">
          © Zubair Ahamad. All Rights reserved.
        </p>
      </div>
    </footer>

  )
}
