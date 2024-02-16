import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGender = styled.span`
  padding-top: 10px;
`;

export const Gender = ({ gender }) => (
  <StyledGender>Gender: {gender}</StyledGender>
);

Gender.propTypes = {
  gender: PropTypes.string,
};
