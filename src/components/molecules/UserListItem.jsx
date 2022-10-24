import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function UserListItem(props) {
  const user = props.user;

  return (
    <Col xs={10} md={6}>
      <Card className="bg-light">
        <Card.Img
          variant="top"
          className="mx-auto rounded-circle"
          src={user.photo}
          alt={user.name}
          style={{ height: '100x', width: '100px' }}
        />

        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p>Email: {user.email}</p>
            <p>Membro desde: {user.createdAt}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
