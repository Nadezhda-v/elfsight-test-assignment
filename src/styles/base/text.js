import styled from 'styled-components';

const SpanStyles = styled.span`
  padding-top: 10px;
`;

export const StyledSpanPrimary = styled(SpanStyles)`
  color: ${props => props.color || props.theme.colors.primary};
`;

export const StyledSpanSecondary = styled(SpanStyles)`
  color: ${props => props.color || props.theme.colors.secondary};
`;
