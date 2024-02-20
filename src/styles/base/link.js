import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${props => props.color || props.theme.colors.link};
  font-size: 1.2rem;
  padding-top: 5px;

  @media ${props => props.theme.media.tablet} {
    font-size: 1rem;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.8rem;
  }
`;
