import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.title};
  font-size: 1.6rem;
  white-space: ${props => (props.nowrap ? 'nowrap' : 'normal')};

  @media ${props => props.theme.media.tablet} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.9rem;
  }
`;
