import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel
      id="carouselFade"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Carousel.Item>
        <img
          src="images/carousel-img/Bateau-lac-montagne.jpg"
          className="d-block w-100"
          alt="Bateau-lac"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/carousel-img/rocks-mountain.jpg"
          className="d-block w-100"
          alt="Rocks"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/carousel-img/Glaciers-Chili.jpg"
          className="d-block w-100"
          alt="Glaciers-Chili"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/carousel-img/Bouquetin-mountain.jpg"
          className="d-block w-100"
          alt="Bouquetin"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
