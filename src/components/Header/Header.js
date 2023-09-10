import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='list'>
          <li>
            <Link to="/">
              <div className="logo-container">
                <img className='img responsive' src={logo} alt="Logo" />
                <div className='border'></div>
              </div>
            </Link>
          </li>


          <li className='responsive'><Link to="/artists">ARTISTS</Link></li>
          <li className='responsive'><Link to="/services">SERVICES</Link></li>
          <li className='responsive'><Link to="/process">PROCESS</Link></li>
          <li className='responsive'><Link to="/studio">STUDIO</Link></li>

          <li className='more-menu'>MORE <FontAwesomeIcon className='icon' icon={faChevronDown}></FontAwesomeIcon>
            <ul className="expand down">
              <li className='responsive' ><Link to="/policies">POLICIES & EXEMPTIONS</Link></li>
              <li className='responsive'><Link to="/faq">FAQ</Link></li>
              <li className='responsive'><Link to="/giftcard">E-GIFTCARDS</Link></li>
              <li className='responsive'><Link to="/products">PRODUCTS USED</Link></li>
            </ul>
          </li>
          <li className='responsive booking'><Link to="/book">BOOK NOW</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
