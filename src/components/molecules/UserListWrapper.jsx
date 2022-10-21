import React from 'react';
import UserListItem from './UserListItem';
import { List } from '@mui/material';

export default function UserListWrapper(props) {
  const users = props.users;

  return (
    <div className="users">
      <h1>Usuários</h1>
      <List>
        {users.map((user, index) => (
          <UserListItem user={user} key={index} />
        ))}
      </List>
    </div>
  );
}
