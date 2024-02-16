import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPreview = styled.img`
  align-self: center;
  border-radius: 15px 0 0 15px;
  grid-area: img;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const Preview = ({ preview }) => (
  <StyledPreview
    src={preview}
    alt='photo'
  />
);

Preview.propTypes = {
  preview: PropTypes.string,
};
