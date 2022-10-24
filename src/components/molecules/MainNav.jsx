import React from 'react';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <Link to="/">Sobre nós</Link>
        </li>
        <li>
          <Link to="/course/1">Cursos</Link>
        </li>
        <li>
          <Link to="/">Porque programar?</Link>
        </li>
        <li>
          <Link to="/">Educadores</Link>
        </li>
        <li>
          <Link to="/registration">Cadastro</Link>
        </li>
        <li>
          <Link to="/login">Área do Aluno</Link>
        </li>
      </ul>
    </nav>
  );
}
