import PropTypes from 'prop-types';
import { StyledSpanPrimary } from '../../../../../styles/base/text';

export const Type = ({ type }) => (
  <StyledSpanPrimary>Type: {type}</StyledSpanPrimary>
);

Type.propTypes = {
  type: PropTypes.string,
};
