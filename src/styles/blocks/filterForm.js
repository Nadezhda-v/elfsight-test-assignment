import styled from 'styled-components';

export const StyledFilterForm = styled.form`
  padding: 20px 20px 0;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: ${props => props.bg || props.theme.colors.bgForm};
  flex-direction: column;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  padding: 10px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 330px;
`;

export const StyledSelect = styled.select`
  ${StyledInput}
  background-color: #fff;
  width: 150px;
  border: 1px solid #ccc;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  gap: ${({ gap }) => gap || '0'};
`;
