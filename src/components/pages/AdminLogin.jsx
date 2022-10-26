import React from 'react';

import Default from '../templates/Default';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AdminLogin(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showMessage, setShowMessage] = React.useState(false);

  const navigate = useNavigate();

  const setAdminToken = props.setAdminToken;
  // const adminToken = props.adminToken;

  const handleFormSubmit = event => {
    event.preventDefault();

    const body = {
      email: email,
      password: password
    };

    const adminEndpoint = 'http://localhost:8000/admin/login';

    fetch(adminEndpoint, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login não autorizado') {
          return setShowMessage(!showMessage);
        }

        setAdminToken(data.token);
        navigate('/admin/logged');
      });

    console.log('hi');
  };

  return (
    <Default>
      <main className="loginMain">
        <Form id="form-all" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Endereço de e-mail: </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="enter-data"
              onChange={event => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha: </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="enter-data"
              onChange={event => setPassword(event.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
        {!showMessage ? (
          ''
        ) : (
          <p className="text-center mt-3 naoAutorizado">
            Login não autorizado. Por favor, reveja suas credenciais e tente
            novamente
          </p>
        )}
      </main>
    </Default>
  );
}
