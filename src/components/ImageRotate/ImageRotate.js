import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledImage,
  StyledImageWrapper
} from '../../styles/blocks/imageRotate';

export const ImageRotate = ({ image, title }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;

    // Вычисляем углы поворота по осям X и Y
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    // Максимальный угол поворота (в градусах)
    const maxAngle = 40;

    setRotateY(deltaX * maxAngle);
    setRotateX(deltaY * maxAngle * -1);
  }, []);

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <StyledImageWrapper>
      <StyledImage
        src={image}
        alt={title}
        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </StyledImageWrapper>
  );
};

ImageRotate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
