import PropTypes from 'prop-types';
import { StyledSpanPrimary } from '../../../../../styles/base/text';

export const Gender = ({ gender }) => (
  <StyledSpanPrimary>Gender: {gender}</StyledSpanPrimary>
);

Gender.propTypes = {
  gender: PropTypes.string,
};
