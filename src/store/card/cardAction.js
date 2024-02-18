import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/constants';

export const cardRequestAsync = createAsyncThunk(
  'card/axios',
  (id) =>
    axios.get(`${URL_API}/character/${id}`)
      .then(({ data }) => {
        const card = data;

        return card;
      })
      .catch((error) => ({ error: error.message }))
);
