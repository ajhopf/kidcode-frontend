import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import EditIcon from '@mui/icons-material/Edit';

export default function UserListItem(props) {
  const user = props.user;

  return (
    <Col xs={10} md={6}>
      <Card className="bg-light">
        <EditIcon
          className="editIcon"
          onClick={() => {
            console.log('click');
          }}
        />

        <Card.Img
          variant="top"
          className="mx-auto rounded-circle"
          src={user.photo}
          alt={user.name}
          style={{ height: '100x', width: '100px' }}
        />

        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text as="div">
            <p>Email: {user.email}</p>
            <p>Membro desde: {user.createdAt}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
