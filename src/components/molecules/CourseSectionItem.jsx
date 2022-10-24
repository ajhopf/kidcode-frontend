import React from 'react';

import image from '../../images/cursos/scratch.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

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

  return (
    <Col
      className="homeCard card px-md-3 m-3"
      xs={11}
      sm={8}
      md={5}
      lg={4}
      xxl={3}
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
      <Row className=" card-footer">Idade: {course.age}</Row>
    </Col>
  );
}

{
  /* <Col className="homeCard m-3" xs={11} lg={4}>
  <div className="card-img-container">
    <img src={image} alt="Janela dentro do programa Scratch" />
  </div>
  <h3>{course.name}</h3>
  <p className="descricao">{course.description.smallDescription}</p>
  <p className="valor">Valor: R${course.description.cost}</p>
  <p className="carga-horaria">Carga horária: {course.description.duration}h</p>
  <p className="idade">Idade: {course.age}</p>
</Col>; */
}
