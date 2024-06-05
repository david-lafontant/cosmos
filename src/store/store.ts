import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apodApi } from '../services/apod';
import { apodsApi } from '../services/apods';

export const store = configureStore({
  reducer: {
    [apodApi.reducerPath]: apodApi.reducer,
    [apodsApi.reducerPath]: apodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apodApi.middleware, apodsApi.middleware),
})

setupListeners(store.dispatch);