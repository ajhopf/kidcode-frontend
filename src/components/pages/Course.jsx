import React from 'react';

import Default from '../templates/Default';
import bannerImage from '../../images/cursos/kid-computer.jpg';

import { useParams } from 'react-router-dom';

export default function Course() {
  const { courseId } = useParams();

  const [course, setCourse] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const endpoint = `http://localhost:8000/courses/${courseId}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setCourse(data.findCourse);

        setIsLoading(false);
      });
  }, [course, courseId]);

  return isLoading ? (
    <div></div>
  ) : (
    <Default>
      <main>
        {/*banner using bootstrap*/}

        <section className="row banner align-items-center ">
          {/*imagem*/}
          <div className="col-12 col-md-7 py-5 ps-md-3">
            <img
              className="img-fluid"
              src={bannerImage}
              alt="Menina concentrada estudando em um laptop, utilizando headphone roxo."
            />
          </div>

          {/*Texto*/}
          <div className="col-12 col-md-5 pb-5 px-4 px-md-5 pb-md-0 d-flex flex-column">
            <h1 className="text-center">{course.name}</h1>
            <p className="text-center">
              {course?.description?.smallDescription}
            </p>

            {/*Botões*/}
            <div className="row justify-content-center">
              <a
                className="col-9 col-md-6 col-lg-4 mx-2 my-2 p-2 text-center"
                href="./cadastro.html"
              >
                Inscrição
              </a>
              <a
                className="col-9 col-md-6 col-lg-4 mx-2 my-2 p-2 text-center"
                href="#conteudo"
              >
                Conteúdo
              </a>
            </div>
          </div>
        </section>

        {/*Banner de promoção*/}
        <section className="oportunidade container-fluid d-flex align-items-center justify-content-center">
          <div className="row text-center align-items-center">
            <div className="col-12 col-md-5">
              <h2>Oportunidade para toda família!</h2>
            </div>
            <div className="col-12 col-md-5">
              <p className="mb-0 mt-3 mt-md-0">
                Ao realizar sua matrícula, você ganha 50% de desconto para um
                familiar realizar qualquer curso!
              </p>
            </div>
          </div>
        </section>

        {/*Conteúdo do curso*/}
        <section className="conteudo-container container-fluid p-0">
          <h2 className="my-3">Conteúdos</h2>

          <p className="fs-5 mx-md-5 my-5 px-5">
            {course?.description?.completeDescription}
          </p>

          <iframe
            src="https://www.youtube.com/embed/bV8pNLmPonE"
            title="YouTube video player"
            frameBorder="0"
            /*allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/
            allowFullScreen
          ></iframe>
          <span id="conteudo"></span>

          <div className="row justify-content-center my-5">
            <div className="col-10 col-md-5 m-1 border rounded">
              <h4>{course.subjects.languages[0]}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sed autem exercitationem tenetur dolor eligendi,
                voluptates consequatur!{' '}
              </p>
            </div>
            <div className="col-10 col-md-5 m-1 border rounded">
              <h4>Conteúdo 2</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sed autem exercitationem tenetur dolor eligendi,
                voluptates consequatur!{' '}
              </p>
            </div>
            <div className="col-10 col-md-5 m-1 border rounded">
              <h4>Conteúdo 3</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sed autem exercitationem tenetur dolor eligendi,
                voluptates consequatur!{' '}
              </p>
            </div>
            <div className="col-10 col-md-5 m-1 border rounded">
              <h4>Conteúdo 4</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur sed autem exercitationem tenetur dolor eligendi,
                voluptates consequatur!{' '}
              </p>
            </div>
          </div>
        </section>
      </main>
    </Default>
  );
}
