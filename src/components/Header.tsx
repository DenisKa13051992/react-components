import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/'}>
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/about'}>
            About us
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
