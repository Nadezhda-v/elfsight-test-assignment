import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(120%);
  }
`;

export const StyledButtonClose = styled(ButtonStyles)`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  width: 18px;
  height: 18px;
`;

export const StyledFilterButton = styled(ButtonStyles)`
  padding: 10px 20px;
  background-color: ${props => props.bg || props.theme.colors.filter};
  color: ${props => props.color || props.theme.colors.primary};
  border-radius: 5px;
  font-size: 1.2rem;
`;

const ButtonFormStyles = css`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: ${props => props.color || props.theme.colors.primary}
`;

export const StyledResetButton = styled(ButtonStyles)`
  ${ButtonFormStyles};
  background-color: ${props => props.bg || props.theme.colors.resetButton};
`;

export const StyledSubmitButton = styled(ButtonStyles)`
  ${ButtonFormStyles};
  background-color: ${props => props.bg || props.theme.colors.submitButton};;
`;
