import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 1.6rem;
`;

export const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string,
};
