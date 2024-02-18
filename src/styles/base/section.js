import styled, { css } from 'styled-components';

const SectionStyles = css`
  display: flex;
  flex-direction: column;
  padding-top: ${props => props.padding || '0'};
`;

export const StyledSection = styled.div`
  ${SectionStyles}
`;
