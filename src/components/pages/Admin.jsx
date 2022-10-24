import React from 'react';
import LoggedArea from '../templates/LoggedArea.jsx';
import UserListWrapper from '../molecules/UserListWrapper';
import CourseListWrapper from '../molecules/CourseListWrapper.jsx';

export default function Admin() {
  const [option, setOption] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [courses, setCourses] = React.useState([]);

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   const body = { title: title };
  // };
  const handleChange = () => {
    if (option === 'users') {
      return <UserListWrapper users={users} />;
    } else if (option === 'courses') {
      return <CourseListWrapper courses={courses} />;
    }
  };

  React.useEffect(() => {
    const usersEndpoint = 'http://localhost:8000/users/all/noauth';
    const coursesEndpoint = 'http://localhost:8000/courses/all';

    fetch(usersEndpoint)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });

    fetch(coursesEndpoint)
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <LoggedArea option={option} setOption={setOption}>
      {handleChange()}
    </LoggedArea>
  );
}
