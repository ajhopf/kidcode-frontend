import React from 'react';
import Default from '../templates/Default';

import { Link } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const adminToken = props.adminToken;

  if (!adminToken) {
    return (
      <Default>
        <main
          className="d-flex flex-column align-items-center
         justify-content-center"
        >
          <h1>Você precisa estar logado para entrar aqui!</h1>
          <Link to="/admin">Clique aqui para ir para a página de login</Link>
        </main>
      </Default>
    );
  }

  return props.children;
}
