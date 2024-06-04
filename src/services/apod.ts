// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Apod } from '../utils/types'
const apiKey = import.meta.env.VITE_API_NASA_API;

// Define a service using a base URL and expected endpoints
export const apodApi = createApi({
  reducerPath: 'apodApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}` }),
  endpoints: (builder) => ({
    getTodayApod: builder.query({
      query: () => ``,
    }),
  }),


});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodayApodQuery } = apodApi;