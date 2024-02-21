import styled, { css } from 'styled-components';

export const StyledFilterForm = styled.form`
  padding: 20px 20px 0;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: ${props => props.bg || props.theme.colors.bgForm};
`;

const StyledWrapper = css`
  display: flex;
  gap: 20px;
`;

export const StyledFormWrapper = styled.div`
  ${StyledWrapper}

  @media ${props => props.theme.media.desktop} {
    flex-direction: column;;
  }

  @media ${props => props.theme.media.phone} {
    gap: 14px;
  }
`;

export const StyledSelectWrapper = styled.div`
  ${StyledWrapper}

  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    gap: 14px;
  }
`;

export const StyledInputWrapper = styled.div`
  ${StyledWrapper}

  @media ${props => props.theme.media.tablet} {
    flex-direction: column;
  }

  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    width: 100%;
    gap: 14px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 340px;

  @media ${props => props.theme.media.desktop} {
    width: 325px;
  }

  @media ${props => props.theme.media.phone} {
    width: 100%;
    padding: 6px 8px;
  }
`;

export const StyledSelect = styled.select`
  ${StyledInput}

  background-color: #fff;
  width: 180px;
  border: 1px solid #ccc;
  padding: 10px 5px;
  max-height: 40px;

  @media ${props => props.theme.media.desktop} {
    width: 210px;
  }

  @media ${props => props.theme.media.phone} {
    max-height: 35px;
    padding: 6px 5px;
    width: 100%;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  gap: ${({ gap }) => gap || '0'};

  @media ${props => props.theme.media.phone} {
    gap: 15px;
  }
`;
