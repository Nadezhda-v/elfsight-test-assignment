import styled from 'styled-components';

export const StyledCard = styled.li`
  position: relative;
  flex: 0 1 580px;
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 200px;
  grid-template-areas:
    'img content';
  column-gap: 20px;
  background: rgb(144 140 132);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  cursor: pointer;
`;

export const StyledContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-right: 10px;
  margin-bottom: 8px;
`;
