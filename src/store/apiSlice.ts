import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterResults, AllCharacters } from '../interfaces';

export const apiSlice = createApi({
  reducerPath: 'public/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    searchCardById: build.query<CharacterResults, number>({
      query: (id: number) => ({
        url: `character/${id}`,
      }),
    }),
    searchCards: build.query<CharacterResults[], string>({
      query: (search: string) => ({
        url: 'character',
        validateStatus: (response, result) => response.status === 200 && !result.isError,
        params: {
          name: search,
        },
      }),
      transformResponse: (response: AllCharacters) => response.results,
    }),
  }),
});

export const { useLazySearchCardByIdQuery, useSearchCardsQuery } = apiSlice;
