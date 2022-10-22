import React from 'react';

import Default from '../templates/Default';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function login() {
  return (
    <Default>
    <section id="form-all">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de e-mail: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="enter-data" />
        <Form.Text className="text-muted">
        Nunca compartilharemos seu e-mail com mais ninguém.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha: </Form.Label>
        <Form.Control type="password" placeholder="Password" className="enter-data" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Entrar
    </Button>
    </section>

    </Default>
  )
}