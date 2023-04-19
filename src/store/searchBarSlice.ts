import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreStateSearch } from '../interfaces';

const initialState: StoreStateSearch = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    searchAdded(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { searchAdded } = searchSlice.actions;
export default searchSlice.reducer;
