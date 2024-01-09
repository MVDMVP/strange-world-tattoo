import React from 'react';
import './Footer.css'; // Import CSS styles

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import the Instagram icon
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      {/* Footer content */}
      <p className='nocopy'>&copy; 2024 Strange World Tattoo - all rights reserved</p>
      <div className="contact">
        <a href = "https://www.instagram.com/strangeworldtattoo" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </a>
        <a href = "https://www.facebook.com/profile.php?id=100062915517053" target = "_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faFacebookF}  />
        </a>
        <a href = "mailto:michaelxdalen@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
        <div className="number">
         <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +1(403)-282-8181</p>
         <p><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> +1(403)-542-7293</p>
         <p><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> +1(403)-969-4890</p>

        </div>
        
      </div>
    </footer>
  );
}

export default Footer;