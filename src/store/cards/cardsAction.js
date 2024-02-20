import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/constants';

export const cardsRequestAsync = createAsyncThunk(
  'cards/axios',
  () =>
    axios.get(`${URL_API}/character`)
      .then(({ data }) => {
        const cards = data.results;

        return cards;
      })
      .catch((error) => ({ error: error.message }))
);

export const filterRequestAsync = createAsyncThunk(
  'filter/axios',
  (params) => {
    if (!params) return;

    const {
      name,
      status,
      species,
      type,
      gender,
    } = params || {};

    // Отфильтровываем только непустые параметры
    const queryParams = [
      name && `name=${encodeURIComponent(name)}`,
      status && `status=${encodeURIComponent(status)}`,
      species && `species=${encodeURIComponent(species)}`,
      type && `type=${encodeURIComponent(type)}`,
      gender && `gender=${encodeURIComponent(gender)}`
    ].filter(Boolean);

    const queryString = queryParams.join('&');

    const urlFilter = queryParams ?
      `${URL_API}/character?${queryString}` : `${URL_API}/character`;

    return axios.get(urlFilter)
      .then(({ data }) => {
        const cards = data.results;

        return cards;
      })
      .catch((error) => ({ error: error.message }));
  }
);
