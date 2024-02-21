import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  StyledNavigationNext,
  StyledNavigationPanel,
  StyledNavigationPrev,
  StyledNavigationPages,
} from '../../styles/blocks/navigationPanel';
import { cardsRequestAsync } from '../../store/cards/cardsAction';

export const NavigationPanel = ({ pages, prevPage, nextPage }) => {
  const currentPage = nextPage ? parseInt(nextPage.split('=')[1]) - 1 : pages;
  const dispatch = useDispatch();

  const onPrevPage = (prevPage) => {
    dispatch(cardsRequestAsync(prevPage));
  };

  const onNextPage = (nextPage) => {
    dispatch(cardsRequestAsync(nextPage));
  };

  return (
    <StyledNavigationPanel>
      <StyledNavigationPages>{currentPage} из {pages}</StyledNavigationPages>
      {prevPage &&
        <StyledNavigationPrev onClick={() => onPrevPage(prevPage)} />
      }
      {nextPage &&
        <StyledNavigationNext onClick={() => onNextPage(nextPage)} />
      }
    </StyledNavigationPanel>
  );
};

NavigationPanel.propTypes = {
  pages: PropTypes.number,
  nextPage: PropTypes.string || null,
  prevPage: PropTypes.string || null,
};
