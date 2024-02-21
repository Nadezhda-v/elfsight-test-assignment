import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { URL_API } from '../../api/constants';

export const cardsRequestAsync = createAsyncThunk(
  'cards/axios',
  (href = null) => {
    const url = href ? `${href}` : `${URL_API}/character`;

    return axios.get(url)
      .then(({ data }) => {
        const cards = data.results;
        const pages = data.info.pages;
        const prev = data.info.prev;
        const next = data.info.next;

        return { cards, pages, prev, next };
      })
      .catch((error) => ({ error: error.message }));
  }
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
        const pages = data.info.pages;
        const prev = data.info.prev;
        const next = data.info.next;

        return { cards, pages, prev, next };
      })
      .catch((error) => ({ error: error.message }));
  }
);
