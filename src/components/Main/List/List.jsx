import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Card } from './Card/Card';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';
import { StyledList } from '../../../styles/blocks/list';
import { Filter } from '../../Filter/Filter';
import { theme } from '../../../styles/theme';
import { Preloader } from '../../../UI/Preloader/Preloader';
import { StyledPreloaderWrapper } from '../../../styles/blocks/preloader';
import { StyledError } from '../../../styles/base/text';
import { NavigationPanel } from '../../NavigationPanel/NavigationPanel';
import useCards from '../../../hooks/useCards';

export const List = () => {
  const { cards, loading, pages, nextPage, prevPage, error } = useCards();
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
      ) : error ? (
        <StyledError>{error}</StyledError>
      ) : (
        <>
          <StyledList>
            {cards.length && cards.map((data) => (
              <Card key={data.id} cardData={data} />
            ))}
          </StyledList>
          <NavigationPanel
            pages={pages}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      )}
    </>
  );
};
