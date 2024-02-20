import styled from 'styled-components';

export const StyledCard = styled.li`
  position: relative;
  flex: 1 1 580px;
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

  @media ${props => props.theme.media.desktop} {
    flex: 0 1 660px;
  }

  @media ${props => props.theme.media.tablet} {
    flex: 0 1 550px;
    grid-template-columns: 150px 1fr;
    min-height: 150px;
  }

  @media ${props => props.theme.media.phone} {
    grid-template-columns: 100px 1fr;
    column-gap: 10px;
    min-height: 100px;
    border-radius: 5px;
  }
`;

export const StyledContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-right: 10px;
  margin-bottom: 10px;
`;
