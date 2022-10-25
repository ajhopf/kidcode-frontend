import React from 'react';
import { Link } from 'react-router-dom';

export default function MainHeader(props) {
  const setOption = props.setOption;
  const isHeaderActive = props.isHeaderActive;

  return (
    <nav className={isHeaderActive ? 'nav-container active' : 'nav-container'}>
      <ul>
        <li
          onClick={() => {
            setOption('users');
          }}
        >
          Usuários
        </li>

        <li
          onClick={() => {
            setOption('courses');
          }}
        >
          Cursos
        </li>
        <li>Adicionar Admin</li>
      </ul>
    </nav>
  );
}
