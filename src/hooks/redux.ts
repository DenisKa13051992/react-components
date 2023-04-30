import { bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { formCardAdded } from '../store/formCardSlice';
import { searchAdded } from '../store/searchBarSlice';
import { StoreType } from '../store/store';

const actions = {
  ...formCardAdded,
  searchAdded,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
