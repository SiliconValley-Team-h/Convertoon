import React from 'react';
import logo from './logo.png';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Header;
