import styled from 'styled-components';

export const StyledNavigationPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  background: ${props => props.bg || props.theme.colors.subPanelBg};
  padding: 15px 20px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 15px;
  color: ${props => props.color || props.theme.colors.subPanel};

  @media ${props => props.theme.media.tablet} {
    font-size: 0.9rem;
    padding: 12px 18px;
  }

  @media ${props => props.theme.media.phone} {
    font-size: 0.7rem;
    padding: 10px 16px;
  }
`;

export const StyledNavigationPages = styled.div`
  margin-right: 50px;

  @media ${props => props.theme.media.tablet} {
    margin-right: 40px;
  }

  @media ${props => props.theme.media.phone} {
    margin-right: 30px;
  }
`;

const navigationStyles = styled.div`
  border: solid ${props => props.color || props.theme.colors.subPanel};
  border-width: 0 2px 2px 0;
  padding: 4px;
  cursor: pointer;
`;

export const StyledNavigationPrev = styled(navigationStyles)`
  transform: rotate(135deg);
  margin-right: 50px;

  @media ${props => props.theme.media.tablet} {
    margin-right: 40px;
  }

  @media ${props => props.theme.media.phone} {
    padding: 3px;
    margin-right: 30px;
  }
`;

export const StyledNavigationNext = styled(navigationStyles)`
  transform: rotate(-45deg);

  @media ${props => props.theme.media.phone} {
    padding: 3px;
  }
`;
