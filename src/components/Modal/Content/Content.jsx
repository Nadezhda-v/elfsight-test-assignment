import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { StyledTitle } from '../../../styles/base/title';
import { StyledSection } from '../../../styles/base/section';
import { StyledSpanSecondary } from '../../../styles/base/text';
import { StyledLink } from '../../../styles/base/link';
import { StyledContent } from '../../../styles/blocks/content';
import { ImageRotate } from '../../ImageRotate/ImageRotate';

export const Content = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    navigate('/');
  }

  const {
    name: title,
    image,
    status,
    species,
    gender,
    location: { name: location, url: urlLocation },
    origin: { name: origin, url: urlOrigin },
    type,
  } = data;

  return (
    <StyledContent>
      <div>
        <StyledSection>
          <StyledTitle color='#000'>{title}</StyledTitle>
          <StyledSpanSecondary>{status}-{species}</StyledSpanSecondary>
          <StyledSpanSecondary>Gender: {gender}</StyledSpanSecondary>
        </StyledSection>

        {type && (
          <StyledSection padding={'10px'}>
            <StyledSpanSecondary>Type:</StyledSpanSecondary>
            <StyledSpanSecondary color='#e36912'>{type}</StyledSpanSecondary>
          </StyledSection>
        )}

        {location && urlLocation && (
          <StyledSection padding={'10px'}>
            <StyledSpanSecondary>Last known location:</StyledSpanSecondary>
            <StyledLink href={urlLocation} target='_blank' rel='noreferrer'>
              {location}
            </StyledLink>
          </StyledSection>
        )}

        {origin && urlOrigin && (
          <StyledSection padding={'10px'}>
            <StyledSpanSecondary>First seen in:</StyledSpanSecondary>
            <StyledLink href={urlOrigin} target='_blank' rel='noreferrer'>
              {origin}
            </StyledLink>
          </StyledSection>
        )}
      </div>

      <ImageRotate image={image} title={title} />
    </StyledContent>
  );
};

Content.propTypes = {
  data: PropTypes.object,
};

