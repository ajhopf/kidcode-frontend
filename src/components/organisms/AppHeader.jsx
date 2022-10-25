import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-laranja.png';

export default function AppHeader(props) {
  const isHeaderActive = props.isHeaderActive;
  const setIsHeaderActive = props.setIsHeaderActive;

  const handleClick = event => {
    setIsHeaderActive(!isHeaderActive);
  };

  return (
    <header className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt="kidcode logo" />
      </Link>
      {props.children}
      {/*Esta parte é referente ao menu hamburguer para telas menores*/}
      <div
        className={isHeaderActive ? 'menu-toggle is-active' : 'menu-toggle'}
        id="mobile-menu"
        onClick={handleClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}
