import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledImageRotate,
  StyledImageWrapper,
} from '../../styles/blocks/imageRotate';

export const ImageRotate = ({ image, title }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    // Вычисляем углы поворота по осям X и Y
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    // Максимальный угол поворота (в градусах)
    const maxAngle = 30;

    setRotateY(deltaX * maxAngle);
    setRotateX(deltaY * maxAngle * -1);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <StyledImageWrapper
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StyledImageRotate
        src={image}
        alt={title}
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
      />
    </StyledImageWrapper>
  );
};

ImageRotate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
