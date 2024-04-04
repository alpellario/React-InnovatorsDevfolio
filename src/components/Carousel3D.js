import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

const Card = ({ path }) => (
  <img
    src={require(`../images/projects/${path}/logo.jpg`)}
    alt={`${path} logo`}
    className="logo"
  />
);

const Carousel3D = ({ changeActiveProject }) => {
  const totalSlides = 11;
  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    changeActiveProject(0);
  }, []);

  const handleSlideChange = newSlide => {
    if (newSlide >= 0 && newSlide < totalSlides) {
      setGoToSlide(newSlide);
      changeActiveProject(newSlide);
    } else if (newSlide < 0) {
      setGoToSlide(totalSlides - 1);
      changeActiveProject(totalSlides - 1);
    } else {
      setGoToSlide(0);
      changeActiveProject(0);
    }
  };

  const slides = [
    { key: 1, content: <Card path="jin" id="0" /> },
    { key: 2, content: <Card path="marinacafe" id="1" /> },
    { key: 3, content: <Card path="marinacafeqr" id="2" /> },
    { key: 4, content: <Card path="hospital" id="3" /> },
    { key: 5, content: <Card path="cargallery" id="4" /> },
    { key: 6, content: <Card path="animaldetect" id="5" /> },
    { key: 7, content: <Card path="wpclone" id="6" /> },
    { key: 8, content: <Card path="cardetect" id="7" /> },
    { key: 9, content: <Card path="carmeeting" id="8" /> },
    { key: 10, content: <Card path="refeerearticle" id="9" /> },
    { key: 11, content: <Card path="basictraining" id="10" /> },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () => handleSlideChange(index),
    };
  });

  return (
    <div className="carousel">
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={3}
        showNavigation={false}
        animationConfig={config.wobbly}
      />
      <div className="carousel-button-container">
        <BsFillArrowLeftSquareFill
          className="carousel-button carousel-button--left"
          onClick={() => handleSlideChange(goToSlide - 1)}
        />

        <BsFillArrowRightSquareFill
          className="carousel-button carousel-button--right"
          onClick={() => handleSlideChange(goToSlide + 1)}
        />
      </div>
    </div>
  );
};

export default Carousel3D;
