import React, { useRef, useState, useEffect } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegCalendarDays, FaTruckArrowRight } from "react-icons/fa6";
import "./cardCarousel.css";

function CardCarousel() {
  const [avaliar] = useState(8.1);

  const items = [
    { icon: <FaRegThumbsUp />, text: "Avaliações de clientes:" },
    { icon: <FaRegCalendarDays />, text: "Centro de conhecimento" },
    { icon: <FaTruckArrowRight />, text: "Produtos de qualidade" },
  ];

  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Posiciona o carrossel no meio dos itens duplicados ao montar
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.firstChild?.clientWidth || 390;
      const middleSet = items.length * itemWidth; // Posição do meio
      carouselRef.current.scrollLeft = middleSet;
    }
  }, [items.length]);

  // Funções de arraste com mouse
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    carouselRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8;

    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Funções de touch para dispositivos móveis
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.0;

    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Duplica os itens suficientes para criar a ilusão de infinito (5 conjuntos)
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <section
      className="card-carousel"
      ref={carouselRef}
      role="region"
      aria-label="Carrossel de informações"
      tabIndex="0"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {repeatedItems.map((item, index) => (
        <div className="card-item" key={index}>
          <span className="icon">{item.icon}</span>
          <p>
            {item.text}{" "}
            {item.text === "Avaliações de clientes:" && (
              <>
                <span className="avaliacao">{avaliar}</span>
                <span className="avaliacao">/10</span>
              </>
            )}
          </p>
        </div>
      ))}
    </section>
  );
}

export default CardCarousel;
