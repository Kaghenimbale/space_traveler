import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/planet.png';
import './header.css';

const Header = () => (
  <div className="navbar">
    <div className="logo-content">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <p>Space Traveler&apos;s Hub</p>
    </div>
    <ul className="navlink">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="mission">Missions</NavLink>
      <NavLink to="profile">My profile</NavLink>
    </ul>
  </div>
);

export default Header;
