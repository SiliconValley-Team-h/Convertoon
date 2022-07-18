import React from 'react';
import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}

export default Header;
