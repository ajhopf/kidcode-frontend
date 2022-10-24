import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-laranja.png';

export default function AppHeader(props) {
  React.useEffect(() => {
    const menu = document.querySelector('#mobile-menu');

    //criando variável para o nav, para poder alterar o posicionamento dele
    const nav = document.querySelector('.nav-container');

    /*adicionar eventListener para fazer com que Link classa .active seja adiciona ao nav-container, fazendo com que seu posicionamento seja alterado (via css)*/

    menu.addEventListener('click', () => {
      nav.classList.toggle('active');
      menu.classList.toggle('is-active');
    });
  });

  return (
    <header className="header-container">
      <Link to="/">
        <img className="logo" src={logo} alt="kidcode logo" />
      </Link>
      {props.children}
      {/*Esta parte é referente ao menu hamburguer para telas menores*/}
      <div className="menu-toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}
