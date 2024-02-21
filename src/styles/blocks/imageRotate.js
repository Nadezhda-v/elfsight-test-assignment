import styled from 'styled-components';

export const StyledImageWrapper = styled.div`
  perspective: 1000px;
  max-width: 100%;

  @media ${props => props.theme.media.desktop} {
    max-width: 50%;
  }
`;

export const StyledImageRotate = styled.img`
  transition: transform 0.1s ease-out;
  box-shadow: 10px 10px 15px gray;
  cursor: pointer;
`;
