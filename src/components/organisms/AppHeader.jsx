import React from 'react';

export default function AppHeader() {
  return (
    <header className="header-container">
      <a href="./index.html">
        <img
          className="logo"
          src="./assets/imagens/logo-laranja.png"
          alt="kidcode logo"
        />
      </a>
      <nav className="nav-container">
        <ul>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="./curso.html">Cursos</a>
          </li>
          <li>
            <a href="#">Porque programar?</a>
          </li>
          <li>
            <a href="#">Educadores</a>
          </li>
          <li>
            <a href="./cadastro.html">Cadastro</a>
          </li>
          <li>
            <a href="#">Área do Aluno</a>
          </li>
        </ul>
      </nav>
      {/*Esta parte é referente ao menu hamburguer para telas menores*/}
      <div className="menu-toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}
