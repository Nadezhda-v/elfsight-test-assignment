import PropTypes from 'prop-types';
import { StyledSpanPrimary } from '../../../../../styles/base/text';

export const Status = ({ status, species }) => (
  <StyledSpanPrimary>{status}-{species}</StyledSpanPrimary>
);

Status.propTypes = {
  status: PropTypes.string,
  species: PropTypes.string,
};
