import PropTypes from 'prop-types';
import { StyledPreview } from '../../../../../styles/blocks/preview';

export const Preview = ({ preview, title }) => (
  <StyledPreview
    src={preview}
    alt={title}
  />
);

Preview.propTypes = {
  preview: PropTypes.string,
  title: PropTypes.string,
};
