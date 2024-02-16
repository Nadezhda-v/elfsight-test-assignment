import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card/Card';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 50px 0;
`;

export const List = () => {
  const cards = useSelector((state) => state.cards.cards);
  console.log('cards: ', cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, []);

  return (
    <StyledList>
      {cards && cards.map((data) => (
        <Card key={data.id} cardData={data} />
      ))}
    </StyledList>
  );
};
