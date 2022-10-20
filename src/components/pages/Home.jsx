import React from 'react';

import bannerImage from '../../images/imagem-banner.jpg';
import scratch from '../../images/cursos/scratch.png';
import coding from '../../images/cursos/coding.png';
import coding2 from '../../images/cursos/coding2.png';
import codingKid from '../../images/cursos/codingkid.png';

export default function Course() {
  return (
    <main>
      {/*Banner principal do site*/}
      <section className="banner-container">
        <img
          src={bannerImage}
          alt="Criança utilizando um tablet para aprender lógica de programação"
        />
        <h1>Aprenda a programar jogando!</h1>
      </section>

      {/*Seção de cursos*/}
      <section className="cursos-container">
        <h2>Nossos cursos</h2>

        {/*Container dos cards dos cursos*/}
        <div className="cursos-cards-container">
          <div className="card primeiro">
            <div className="card-img-container">
              <img src={scratch} alt="Janela dentro do programa Scratch" />
            </div>
            <h3>Programação com Scratch</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h</p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>

          <div className="card segundo">
            <div className="card-img-container">
              <img
                src={coding2}
                alt="Ilustração de um browser aberto em um fundo vermelho redondo"
              />
            </div>
            <h3>Curso 2</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h</p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>

          <div className="card terceiro">
            <div className="card-img-container">
              <img
                src={coding}
                alt="Ilustração de um homem programando em frente a um computador"
              />
            </div>
            <h3>Curso 3</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h </p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>

          <div className="card quarto">
            <div className="card-img-container">
              <img
                src={codingKid}
                alt="Ilustração de um menino em frente a um computador"
              />
            </div>
            <h3>Curso 4</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h</p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>

          <div className="card quinto">
            <div className="card-img-container">
              <img
                src={coding}
                alt="Ilustração de um homem programando em frente a um computador"
              />
            </div>
            <h3>Curso 5</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h</p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>

          <div className="card sexto">
            <div className="card-img-container">
              <img
                src={coding}
                alt="Ilustração de um homem programando em frente a um computador"
              />
            </div>
            <h3>Curso 6</h3>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              illum aperiam iure error modi, odio voluptatum perspiciatis,
              cupiditate asperiores, magnam vitae impedit sequi explicabo nulla
              assumenda aliquid praesentium illo iusto!
            </p>
            <p className="valor">Valor: R$1000, 00</p>
            <p className="carga-horaria">Carga horária: 30h</p>
            <p className="idade">Idade: 5 a 10 anos</p>
          </div>
        </div>
      </section>
    </main>
  );
}
