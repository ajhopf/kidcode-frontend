import React from 'react';

import Default from '../templates/Default';
import CourseSectionWrapper from '../molecules/CourseSectionWrapper';
import BannerContainer from '../molecules/BannerContainer';

export default function Course() {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const coursesEndpoint = 'http://localhost:8000/courses/all';

    fetch(coursesEndpoint)
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <Default>
      <main>
        {/*Banner principal do site*/}
        <BannerContainer />
        {/*Seção de cursos*/}
        <CourseSectionWrapper courses={courses} />
      </main>
    </Default>
  );
}
