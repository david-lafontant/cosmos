import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apodApi } from '../services/apod';

export const store = configureStore({
  reducer: {
    [apodApi.reducerPath]: apodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apodApi.middleware),
})

setupListeners(store.dispatch);