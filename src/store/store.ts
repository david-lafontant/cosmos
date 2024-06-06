import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apodsApi } from '../services/apods';

export const store = configureStore({
  reducer: {
    [apodsApi.reducerPath]: apodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apodsApi.middleware),
})	

setupListeners(store.dispatch);
