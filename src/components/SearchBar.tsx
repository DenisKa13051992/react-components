import { CharacterResultsStatesByName } from '../interfaces';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';
import { SubmitHandler, useForm } from 'react-hook-form';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { searchAdded } from '../store/searchBarSlice';
import { useActions, useAppSelector } from '../hooks/redux';

const SearchBar = () => {
  const { handleSubmit, register } = useForm<{ value: string }>({
    mode: 'onSubmit',
  });
  const query = useAppSelector((state) => state.search.searchValue);
  const { searchAdded } = useActions();
  // const [searchBarValue, setSearchBarValue] = useState(query);

  // const searchRef = useRef<string>('');
  // const [searchState, setSearchState] = useState(localStorage.getItem('searchValue') || '');
  // const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;
  //   setSearchState(inputValue);
  //   localStorage.setItem('searchValue', inputValue);
  // };

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchValue', searchRef.current || '');
  //   };
  // }, []);

  // useEffect(() => {
  //   searchRef.current = searchState;
  // }, [searchState]);

  const clearHandleClick = () => {
    // setSearchState('');
    // localStorage.removeItem('searchValue');
  };

  const sendHandleClick = async () => {
    // loading(true);
    // GetCharacterByName(searchState)
    //   .then((characterByName) => {
    //     updateCartList(characterByName.results);
    //   })
    //   .catch(() => {
    //     updateCartList([]);
    //   })
    //   .finally(() => {
    //     loading(false);
    //   });
    // searchAdded(data.value);
  };

  const onSubmit: SubmitHandler<{ value: string }> = (data) => {
    searchAdded(data.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit(onSubmit)}>
      <label className="search-label-input">Search:</label>
      <input
        className="search-input"
        placeholder="Search"
        {...register('value')}
        defaultValue={String(query)}
      />
      <button type="submit" className="button-search" value="Search" onClick={sendHandleClick}>
        Submit
      </button>
      <input type="button" className="button-clear" value="Clear" onClick={clearHandleClick} />
    </form>
  );
};
export default SearchBar;
