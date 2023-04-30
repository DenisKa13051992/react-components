import { createSlice } from '@reduxjs/toolkit';
import { StoreStateCard } from '../interfaces';

const initialState: StoreStateCard = {
  formCard: [],
};

const formCardSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    formAdded(state, action) {
      state.formCard.push(action.payload);
    },
  },
});

export const formCardAdded = formCardSlice.actions;
export default formCardSlice.reducer;
