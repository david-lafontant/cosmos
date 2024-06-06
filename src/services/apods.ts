
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Apods } from '../utils/types';
const apiKey = import.meta.env.VITE_API_NASA_API;

export const apodsApi = createApi({
  reducerPath: 'apodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.nasa.gov/planetary` }),
  endpoints: (builder) => ({
   getApods: builder.query<Apods, number>({
      query: (quantity) => `/apod?api_key=${apiKey}&count=${quantity}`,
    }),
        getTodayApod: builder.query<Apod, void>({
      query: () => `/apod?api_key=${apiKey}`,
    }),
}),
});

export const { useGetApodsQuery , useGetTodayApodQuery} = apodsApi;
