import styled from 'styled-components';

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 20px;
  margin-top: 10px;

  @media ${props => props.theme.media.tablet} {
    margin-top: 40px;
  }

  @media ${props => props.theme.media.phone} {
    margin-top: 30px;
  }
`;
