import styled from 'styled-components';

const spanStyles = styled.span`
  padding-top: 10px;

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.7rem;
    padding-top: 6px;
  }
`;

export const StyledSpanPrimary = styled(spanStyles)`
  color: ${props => props.color || props.theme.colors.primary};
`;

export const StyledSpanSecondary = styled(spanStyles)`
  color: ${props => props.color || props.theme.colors.secondary};
`;

export const StyledError = styled.span`
  display: block;
  text-align: center;
  margin-top: 50px;
  color: ${props => props.color || props.theme.colors.secondary};
`;
