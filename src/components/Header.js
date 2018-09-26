import React from 'react';
import '../styles/Header.css';
import logo from '../assets/img/feline-finder-logo.png';

export default function Header() {
  return (
    <header className="header-container">
      <img src={logo} className="header-logo" alt="logo" />
      <h2 className="header-title">find the purrfect breed based on coat and pattern</h2>
    </header>
  )
}
