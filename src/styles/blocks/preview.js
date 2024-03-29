import styled from 'styled-components';

export const StyledPreview = styled.img`
  align-self: center;
  border-radius: 15px 0 0 15px;
  grid-area: img;
  height: 100%;
  object-fit: cover;
  width: 100%;

  @media ${props => props.theme.media.phone} {
    border-radius: 5px 0 0 5px;
  }
`;
