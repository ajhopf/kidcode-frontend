import React from 'react';
import logo from '../../images/logo-laranja.png';

export default function AppFooter() {
  return (
    <footer className="footer-container">
      <img className="logo" src={logo} alt="Kidcode logo" />
      <p>Copyright Kicode &#174;</p>
    </footer>
  );
}
