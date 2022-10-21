import React from 'react';
import Default from '../templates/Default';
import UserListWrapper from '../molecules/UserListWrapper';

export default function Admin() {
  const [users, setUsers] = React.useState([]);

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   const body = { title: title };
  // };

  React.useEffect(() => {
    const usersEndpoint = 'http://localhost:8000/users/all/noauth';

    fetch(usersEndpoint)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <Default>
      <main className="admin">
        <input type="text"></input>
        <UserListWrapper users={users} />
      </main>
    </Default>
  );
}
