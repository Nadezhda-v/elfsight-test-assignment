import { createSlice } from '@reduxjs/toolkit';
import { cardRequestAsync } from './cardAction';

const initialState = {
  status: '',
  card: [],
  error: '',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardRequestAsync.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(cardRequestAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.card = action.payload;
        state.error = '';
      })
      .addCase(cardRequestAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.error;
      });
  }
});

export const cardReducer = cardSlice.reducer;
