import React from 'react';
import DropdownButton from './DropDownButton';
import { Link } from 'react-router-dom';

export default function MainNav(props) {
  const courses = props.courses;
  const isHeaderActive = props.isHeaderActive;

  return (
    <nav className={isHeaderActive ? 'nav-container active' : 'nav-container'}>
      <ul>
        <li>
          <Link to="/">Sobre nós</Link>
        </li>
        <DropdownButton courses={courses} />
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
