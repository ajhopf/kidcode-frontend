import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function DropDownButton(props) {
  const courses = props.courses;

  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <Dropdown
      as="li"
      dropdown="center"
      onToggle={() => console.log('toggle')}
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
    >
      <Dropdown.Toggle as="a" className="main-style" id="dropdown-basic">
        Cursos
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown}>
        {courses &&
          courses.map((course, index) => {
            return (
              <Dropdown.Item key={index}>
                <Link to={`/course/${course._id}`}>{course.name}</Link>
              </Dropdown.Item>
            );
          })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
