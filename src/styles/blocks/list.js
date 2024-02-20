import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 50px 0;

  @media ${props => props.theme.media.tablet} {
    padding: 30px 0;
    gap: 24px;
  }

  @media ${props => props.theme.media.phone} {
    padding: 20px 0;
    gap: 15px;
  }
`;
