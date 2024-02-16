import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/constants';

export const cardsRequestAsync = createAsyncThunk(
  'cards/axios',
  () =>
    axios.get(`${URL_API}/character`)
      .then(({ data }) => {
        console.log('data: ', data);
        const cards = data.results;

        return cards;
      })
      .catch((error) => ({ error: error.message }))
);
