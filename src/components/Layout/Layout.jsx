import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLayout = styled.div`
  max-width: 1420px;
  padding: 0 30px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};
