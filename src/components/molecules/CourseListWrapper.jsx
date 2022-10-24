import React from 'react';
import CourseListItem from './CourseListItem';
import { List } from '@mui/material';

export default function CourseListWrapper(props) {
  const courses = props.courses;

  return (
    <div className="usersListWrapper">
      <h1>Cursos</h1>
      <List>
        {courses.map((course, index) => (
          <CourseListItem course={course} key={index} />
        ))}
      </List>
    </div>
  );
}
