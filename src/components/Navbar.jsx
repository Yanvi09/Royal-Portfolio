//Upar jo navigation bar hota hai (Home, Projects, Resume, etc.), wo banata hai.
// Premium aur simple style mein banaya gaya hai.






import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="lux-navbar">
      <h1 className="navbar-title">The Vault</h1>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Butler</Link></li>
        <li className={location.pathname === '/vault' ? 'active' : ''}><Link to="/vault">Gallery</Link></li>
        <li className={location.pathname === '/command' ? 'active' : ''}><Link to="/chronicle">Royal</Link></li>
        <li className={location.pathname === '/resume' ? 'active' : ''}><Link to="/resume">Résumé</Link></li>
        <li className={location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
