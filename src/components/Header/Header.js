import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>

        <div className="title">
          <Link to="/">
            <h2 className='text'>STRANGE WORLD TATTOO</h2>
          </Link>  
          
        </div>

        <ul className='list'>
          <li className='responsive'><Link to="/">HOME</Link></li>
          <li className='responsive'><Link to="/artists">ARTISTS</Link></li>
          <li className='responsive'><Link to="/services">SERVICES</Link></li>
          <li className='responsive'><Link to="/process">PROCESS</Link></li>
          <li className='responsive'><Link to="/studio">STUDIO</Link></li>
          <li className='responsive'><Link to="/policies">POLICIES</Link></li>
          <li className='responsive'><Link to="/faq">FAQ</Link></li>
          <li className='responsive'><Link to="/contact">CONTACT</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
