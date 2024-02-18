import PropTypes from 'prop-types';
import { StyledTitle } from '../../../../../styles/base/title';

export const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string,
};
