import React from 'react';

import Row from 'react-bootstrap/Row';

import CourseSectionItem from './CourseSectionItem';

export default function CourseSectionWrapper(props) {
  const courses = props.courses;

  return (
    <Row className="text-center">
      <h2 className="nossosCursos">Nossos cursos</h2>

      {/*Container dos cards dos cursos*/}

      <Row className="justify-content-center">
        {courses.map((course, index) => (
          <CourseSectionItem course={course} key={index} />
        ))}
      </Row>
    </Row>
  );
}
