import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Preview } from './Preview/Preview';
import { Title } from './Title/Title';
import { Status } from './Status/Status';
import { Gender } from './Gender/Gender';
import { StyledCard, StyledContent } from '../../../../styles/blocks/card';

export const Card = ({ cardData }) => {
  const {
    image: preview,
    name: title,
    id,
    status,
    species,
    gender,
  } = cardData;

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <StyledCard onClick={handleCardClick}>
      <Preview preview={preview} title={title} />

      <StyledContent>
        <Title title={title} />
        <Status status={status} species={species} />
        <Gender gender={gender}/>
      </StyledContent>
    </StyledCard>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
};
