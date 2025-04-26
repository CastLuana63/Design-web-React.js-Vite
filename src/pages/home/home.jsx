import React, { useRef } from "react";
import HeaderTopDesktop from "../../components/headerTopDesktop/headerTopDesktop";
import Header from "../../components/header/header";
import HeaderSessao from "../../components/headerSessao/headerSessao";
import imagens from "../../utils/imagens";
import CardCarousel from "../../components/cardCarousel/cardCarousel";

import "./home.css";

function Home() {
  const carouselRef = useRef(null);

  const startDrag = (e) => {
    const carousel = carouselRef.current;
    carousel.isDown = true;
    carousel.startX = e.pageX - carousel.offsetLeft;
    carousel.scrollLeftStart = carousel.scrollLeft;
  };

  const onDrag = (e) => {
    const carousel = carouselRef.current;
    if (!carousel.isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - carousel.startX) * 2;
    carousel.scrollLeft = carousel.scrollLeftStart - walk;
  };

  const stopDrag = () => {
    const carousel = carouselRef.current;
    carousel.isDown = false;
  };

  return (
    <div className="container">
      <HeaderTopDesktop />
      <Header />
      <HeaderSessao />
      {/* Conteúdo principal */}
      <div className="fundo">
        <div className="conteudo">
          <CardCarousel />

          <section className="sessao-d ">
            <div className="card-info-top">
              <img
                src={imagens.exemplo1.src}
                alt={imagens.exemplo1.name}
                className="img-principal"
              />
            </div>
            <div className="card-info-top">
              <img
                src={imagens.exemplo2.src}
                alt={imagens.exemplo2.name}
                className="img-principal"
              />
            </div>
          </section>

          {/* Sessão para telas grandes */}
          <section className="sessao-imagens">
            <div className="card-info">
              <img src={imagens.exemplo3.src} alt="Imagem 1" />
            </div>
            <div className="card-info">
              <img src={imagens.exemplo4.src} alt="Imagem 2" />
            </div>
            <div className="card-info">
              <img src={imagens.exemplo5.src} alt="Imagem 3" />
            </div>
          </section>

          <section className="sessao-carrossel">
            <div
              className="carousel"
              ref={carouselRef}
              onMouseDown={startDrag}
              onMouseLeave={stopDrag}
              onMouseUp={stopDrag}
              onMouseMove={onDrag}
            >
              <div className="carousel-item">
                <img
                  src={imagens.exemplo6.src}
                  alt="Imagem 1"
                  draggable="false"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imagens.exemplo7.src}
                  alt="Imagem 2"
                  draggable="false"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imagens.exemplo8.src}
                  alt="Imagem 3"
                  draggable="false"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="conteudo-secundario"></div>

      <div className="footer"></div>

      <div className="feedback">
        <div className="feedback-button">
          <div className="feedback-button-content">Feedback</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
