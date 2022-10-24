import React from 'react';

import image from '../../images/cursos/scratch.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from 'react-router-dom';

/* Course schema:

{
    "name": "Roblox",
    "age": "8 a 12 anos",
    "subjects": {
        "languages": ["roblox"]
    },
    "description":{
        "duration": 30,
        "cost": 2000,
        "smallDescription": "Aprenda a desenvolver jogos utilizando Roblox!",
        "completeDescription": "Neste curso para iniciantes na programação, os alunos irão aprender o básico para programar utilizando o Roblox Studio, desenvolvendo um jogo de corrida com obstáculos. O aluno irá aprender temas como variáveis, funções e eventos!."
    }    
}

 */

export default function CourseSectionItem(props) {
  const course = props.course;

  const navigate = useNavigate();

  const handleCourseClick = e => {
    console.log(course._id);
    const id = course._id;
    navigate(`./course/${id}`);
  };

  return (
    <Col
      className="homeCard card px-md-3 m-3"
      xs={11}
      sm={8}
      md={5}
      lg={4}
      xxl={3}
      onClick={handleCourseClick}
    >
      <Row xs={12}>
        <img src={image} alt="Janela dentro do programa Scratch" />
      </Row>

      <div className="card-body">
        <Row className="mb-4">
          <h3>{course.name}</h3>
        </Row>

        <Row className="mb-4 justify-content-center ">
          {course.description.smallDescription}
        </Row>
      </div>
      <Row className="mb-4">
        <Col>Valor: R${course.description.cost}</Col>
        <Col>Carga horária: {course.description.duration}h</Col>
      </Row>
      <Row className="card-footer justify-content-center">
        Idade: {course.age}
      </Row>
    </Col>
  );
}
