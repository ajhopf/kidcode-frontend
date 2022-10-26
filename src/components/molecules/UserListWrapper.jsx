import React from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import UserListItem from './UserListItem';

export default function UserListWrapper(props) {
  const users = props.users;

  return (
    <div className="text-center">
      <h1>Usuários</h1>

      <Container>
        <Row>
          {users.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </Row>
      </Container>
    </div>
  );
}
