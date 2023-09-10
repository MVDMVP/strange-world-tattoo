import React from 'react';
import './Footer.css'; // Import CSS styles

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the Instagram icon
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      {/* Footer content */}
      <p className='nocopy'>&copy; 2023 The Golden Pearl Tattoo Shop. All rights reserved.</p>
      <div className="contact">
        <a href = "https://www.instagram.com/thegoldenpearltattoo/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href = "https://www.facebook.com/thegoldenpearltattoo/" target = "_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faFacebookF}  />
        </a>
        <a href = "mailto:michaelxdalen@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
        <p className="number">+1(289) 837-4496</p>
      </div>
    </footer>
  );
}

export default Footer;