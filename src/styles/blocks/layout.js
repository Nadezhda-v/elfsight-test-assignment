import styled from 'styled-components';

export const StyledLayout = styled.div`
  max-width: 1420px;
  padding: 40px 30px 0;
  margin: 0 auto;

  @media ${props => props.theme.media.tablet} {
    padding: 20px 30px 0;
  }

  @media ${props => props.theme.media.phone} {
    padding: 0px 30px 0;
  }
`;
