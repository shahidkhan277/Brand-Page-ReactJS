import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>

    <div className='navbar'> 
    <button
        id="mobile-menu-toggle"
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      >
        Menu
      </button>
      
        <div className='logo'>
            <img src='brand_logo.png' alt='logo'/>
        </div>
        <nav>
        <ul className={`nav-list ${mobileMenuOpen ? 'active' : ''}`}>
            <li><Link className='nav-tag' to='/'>Home</Link> </li>
            <li><Link className='nav-tag' to='about'>About</Link></li>
            <li><Link className="nav-tag" to="contact-us">Contact</Link> </li>
        </ul>
      </nav>
     <div>
     <button className='nav-btn'>Login</button>
     </div>
    </div>
  
  </>
  )
}

export default Navbar
