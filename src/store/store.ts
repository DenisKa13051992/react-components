import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import searchReducer from './searchBarSlice';
import formCardReducer from './formCardSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer,
    formCard: formCardReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type StoreType = ReturnType<typeof store.getState>;
