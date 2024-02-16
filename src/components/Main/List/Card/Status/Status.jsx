import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStatus = styled.span`
  padding-top: 10px;
`;

export const Status = ({ status, species }) => (
  <StyledStatus>{status}-{species}</StyledStatus>
);

Status.propTypes = {
  status: PropTypes.string,
  species: PropTypes.string,
};
