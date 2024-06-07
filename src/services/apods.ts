
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Apods , Apod} from '../utils/types';
import {getDate} from '../utils/getDate';
const apiKey = import.meta.env.VITE_API_NASA_API;
const {oneYearago, todayDate } = getDate();

export const apodsApi = createApi({
  reducerPath: 'apodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.nasa.gov/planetary` }),
  endpoints: (builder) => ({
   getApods: builder.query<Apods, void>({
      query: () => `/apod?api_key=${apiKey}&start_date=${oneYearago}&end_date=${todayDate}`,
    }),
        getTodayApod: builder.query<Apod, void>({
      query: () => `/apod?api_key=${apiKey}`,
    }),
}),
});


export const { useGetApodsQuery , useGetTodayApodQuery} = apodsApi;
