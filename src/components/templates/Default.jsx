import React from 'react';
import AppHeader from '../organisms/AppHeader';
import AppFooter from '../organisms/AppFooter';
import MainNav from '../molecules/MainNav';

export default function Default(props) {
  const [courses, setCourses] = React.useState([]);

  const [isHeaderActive, setIsHeaderActive] = React.useState(false);

  React.useEffect(() => {
    const coursesEndpoint = 'http://localhost:8000/courses/all';

    fetch(coursesEndpoint)
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      });
  }, []);

  return (
    <div className="default">
      <AppHeader
        isHeaderActive={isHeaderActive}
        setIsHeaderActive={setIsHeaderActive}
      >
        <MainNav courses={courses} isHeaderActive={isHeaderActive} />
      </AppHeader>
      {props.children}
      <AppFooter />
    </div>
  );
}
