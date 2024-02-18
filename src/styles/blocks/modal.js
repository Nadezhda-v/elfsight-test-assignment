import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.45);
`;

export const StyledModal = styled.div`
  position: absolute;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 50px;
  inset: 18%;
  border-radius: 16px;
  margin-bottom: 10px;
`;
