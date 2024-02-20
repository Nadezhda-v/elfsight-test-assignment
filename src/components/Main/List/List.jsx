import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card/Card';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';
import { StyledList } from '../../../styles/blocks/list';
import { Filter } from '../../Filter/Filter';
import { theme } from '../../../styles/theme';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { StyledPreloaderWrapper } from '../../../styles/blocks/preloader';
import { StyledError } from '../../../styles/base/text';

export const List = () => {
  const cards = useSelector((state) => state.cards.cards);
  const loading = useSelector((state) => state.cards.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, []);

  return (
    <>
      <Filter />
      {loading ? (
        <StyledPreloaderWrapper>
          <Preloader color={theme.colors.preloader} size={40} />
        </StyledPreloaderWrapper>
      ) : cards.error ? (
        <StyledError>{cards.error}</StyledError>
      ) : (
        <StyledList>
          {cards.length && cards.map((data) => (
            <Card key={data.id} cardData={data} />
          ))}
        </StyledList>
      )}
    </>
  );
};
