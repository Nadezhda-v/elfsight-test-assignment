import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 20px;
  margin-top: 10px;

  @media ${props => props.theme.media.desktop} {
    margin-top: 30px;
  }

  @media ${props => props.theme.media.tablet} {
    gap: 30px;
  }
`;
