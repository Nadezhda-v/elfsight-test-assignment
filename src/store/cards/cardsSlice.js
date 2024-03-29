import { createSlice } from '@reduxjs/toolkit';
import { cardsRequestAsync, filterRequestAsync } from './cardsAction';

const initialState = {
  loading: false,
  cards: [],
  pages: 0,
  next: '',
  prev: '',
  error: '',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(cardsRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload.cards;
        state.pages = action.payload.pages;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.error = action.payload.error;
      })
      .addCase(cardsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

      .addCase(filterRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(filterRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload.cards;
        state.pages = action.payload.pages;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.error = action.payload.error;
      })
      .addCase(filterRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  }
});

export const cardsReducer = cardsSlice.reducer;
