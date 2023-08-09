import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <ul className='list'>
          <li>
            <Link to="/home">
              <div className="logo">
                <img className='img responsive' src={logo} alt="Logo" />
                <div className='border'></div>
              </div>
            </Link>
          </li>
          <li className='responsive'><Link to="/artists">ARTISTS</Link></li>
          <li className='responsive'><Link to="/services">SERVICES</Link></li>
          <li className='responsive'><Link to="/process">PROCESS</Link></li>
          <li className='responsive'><Link to="/studio">STUDIO</Link></li>
          <li className='responsive'><Link to="/more">MORE</Link></li>
          <li className='responsive'><Link to="/book">BOOK NOW</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
