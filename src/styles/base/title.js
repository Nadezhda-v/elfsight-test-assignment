import styled from 'styled-components';

export const StyledTitle = styled.h1`
  color: ${props => props.color || props.theme.colors.title};
  font-size: 1.6rem;
`;
