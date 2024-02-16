import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Preview } from './Preview/Preview';
import { Title } from './Title/Title';
import { Status } from './Status/Status';
import { Gender } from './Gender/Gender';

const StyledCard = styled.li`
  position: relative;
  flex: 0 1 580px;
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 200px;
  grid-template-areas:
    'img content';
  column-gap: 20px;
  background: rgb(144 140 132);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  cursor: pointer;
`;

const StyledContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  padding-right: 10px;
  margin-bottom: 8px;
`;

export const Card = ({ cardData }) => {
  const {
    image: preview,
    name,
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
      <Preview preview={preview} />

      <StyledContent>
        <Title title={name} />
        <Status status={status} species={species} />
        <Gender gender={gender}/>
      </StyledContent>
    </StyledCard>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
};
