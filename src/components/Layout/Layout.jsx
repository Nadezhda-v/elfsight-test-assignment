import PropTypes from 'prop-types';
import { StyledLayout } from '../../styles/blocks/layout';

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
