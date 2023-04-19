import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div>
          <h1>Space Travelers Hub</h1>
        </div>
        <ul>
          <NavLink to="/">Rockets</NavLink>
        </ul>
      </nav>
    </>
  );
}
