import { configureStore } from '@reduxjs/toolkit';

import { cardsReducer } from './cards/cardsSlice';
import { cardReducer } from './card/cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    card: cardReducer,
  },
});
