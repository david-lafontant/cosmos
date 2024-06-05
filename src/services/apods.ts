
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Apods } from '../utils/types';
const apiKey = import.meta.env.VITE_API_NASA_API;

export const apodsApi = createApi({
  reducerPath: 'apodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=8` }),
  endpoints: (builder) => ({
    getApods: builder.query<Apods, string>({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetApodsQuery } = apodsApi;