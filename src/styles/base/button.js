import styled, { css } from 'styled-components';

const buttonStyles = css`
  border: none;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(120%);
  }
`;

const buttonFormStyles = css`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: ${props => props.color || props.theme.colors.primary};
`;

export const StyledButtonClose = styled.button`
  ${buttonStyles};

  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  width: 18px;
  height: 18px;

  @media ${props => props.theme.media.tablet} {
    width: 16px;
    height: 16px;
  }

  @media ${props => props.theme.media.phone} {
    width: 12px;
    height: 12px;
  }
`;

export const StyledFilterButton = styled.button`
  ${buttonStyles};
  ${buttonFormStyles};

  background-color: ${props => props.bg || props.theme.colors.filter};
  font-size: 1.2rem;

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.8rem;
    padding: 8px 15px;
  }
`;

export const StyledResetButton = styled.button`
  ${buttonStyles};
  ${buttonFormStyles};

  background-color: ${props => props.bg || props.theme.colors.resetButton};

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
    padding: 8px 15px;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const StyledSubmitButton = styled.button`
  ${buttonStyles};
  ${buttonFormStyles};

  background-color: ${props => props.bg || props.theme.colors.submitButton};

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
    padding: 8px 15px;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;
