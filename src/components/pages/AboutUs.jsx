import React from "react";
import Default from "../templates/Default";

export default function AboutUs() {
  return (
    <Default>
      <article class="box-1">
        <h2 class="title">Quem somos</h2>
        <p class="description">
          Somos uma escola de programação voltada para crianças, pois
          acreditamos que a programação será o futuro para um mundo mais
          sustentável e próspero, e nada mais justo do que ensinar desde cedo
          para aqueles que poderão colher esses frutos. A programação nos
          permite automatizar tarefas que muitas vezes demandam muitas horas de
          execução, e que com seu uso são facilmente resolvidas em minutos,
          proporcionando a você mais tempo para outras atividades. A realidade é
          que o mundo está se tornando mais digital e não tem mais volta, um
          belo exemplo é a Indústria 4.0, onde a internet é "levada" para o chão
          de fábrica.
        </p>
        <div class="square">
          <p class="phrase">Coding is the new english!</p>
        </div>
      </article>

      <section class="mission-vision-value">
        <h4 class="subtitle-mission">Missão:</h4>
        <p class="mission-text">
          Nossa missão é proporcionar um aprendizado divertido e duradouro, pois
          nessa fase acreditamos que se divertindo é que se aprende.
        </p>
        <h4 class="subtitle-vision">Visão:</h4>
        <p class="vision-text">
          Pretendemos ser líderes no ensino de programação para crianças, com
          metodologias eficazes, que possibilitem que o ensino seja divertido e
          prazeroso, e claro, duradouro. E que todo esse conhecimento
          transmitido seja para tornar o mundo um lugar melhor!
        </p>
        <h4 class="subtitle-value">Valores:</h4>
        <p class="value-text">
          Acreditamos num mundo onde toda criança é igual, independente de
          religião, classe social ou raça, pois elas serão o futuro do mundo.
          Portanto, não toleramos nenhum tipo de preconceito ou desrespeito. Se
          essa condição for atendida, então garantiremos que a diversão && o
          aprendizado serão = true.
        </p>
      </section>
    </Default>
  );
}
