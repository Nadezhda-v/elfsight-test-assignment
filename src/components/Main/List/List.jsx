import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card/Card';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';
import { StyledList } from '../../../styles/blocks/list';
import { Filter } from '../../Filter/Filter';

export const List = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, []);

  const applyFilters = (filters) => {
    console.log('filters: ', filters);
  };

  return (
    <>
      <Filter applyFilters={applyFilters} />
      <StyledList>
        {cards && cards.map((data) => (
          <Card key={data.id} cardData={data} />
        ))}
      </StyledList>
    </>
  );
};
