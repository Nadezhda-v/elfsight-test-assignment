import styled from 'styled-components';

const SpanStyles = styled.span`
  padding-top: 10px;

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.8rem;
  }
`;

export const StyledSpanPrimary = styled(SpanStyles)`
  color: ${props => props.color || props.theme.colors.primary};
`;

export const StyledSpanSecondary = styled(SpanStyles)`
  color: ${props => props.color || props.theme.colors.secondary};
`;

export const StyledError = styled.span`
  display: block;
  text-align: center;
  margin-top: 50px;
  color: ${props => props.color || props.theme.colors.secondary};
`;
