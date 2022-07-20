import React from 'react';
import logo from '../images/logo.png';
import '../../styles/common/_Header.scss';

function Header() {
  return (
    <div className="header">
      {/*Convertoon로고, Header*/}
      <img src={logo} className="app-logo" alt="logo" />
    </div>
  );
}

export default Header;
