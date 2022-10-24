import React from 'react';
import bannerImage from '../../images/imagem-banner.jpg';

export default function BannerContainer() {
  return (
    <section className="banner-container">
      <img
        src={bannerImage}
        alt="Criança utilizando um tablet para aprender lógica de programação"
      />
      <h1>Aprenda a programar jogando!</h1>
    </section>
  );
}
