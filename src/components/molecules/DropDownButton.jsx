import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropDownButton(props) {
  const courses = props.courses;

  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <Dropdown
      as="li"
      dropdown="center"
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
    >
      <Dropdown.Toggle
        as="a"
        className="dropDownCursosA main-style"
        id="dropdown-basic"
      >
        Cursos
      </Dropdown.Toggle>

      <Dropdown.Menu show={showDropdown}>
        {courses &&
          courses.map(course => {
            return (
              <Dropdown.Item href={`/course/${course._id}`}>
                {course.name}
              </Dropdown.Item>
            );
          })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
