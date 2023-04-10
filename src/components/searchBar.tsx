import { CharacterResultsStatesByName } from '../interfaces';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';
import './SearchBar.css';

const SearchBar = ({ updateCartList }: CharacterResultsStatesByName) => {
  const searchRef = useRef<string>('');
  const [searchState, setSearchState] = useState(localStorage.getItem('searchValue') || '');
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchState(inputValue);
    localStorage.setItem('searchValue', inputValue);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, []);

  useEffect(() => {
    searchRef.current = searchState;
  }, [searchState]);

  const clearHandleClick = () => {
    setSearchState('');
    localStorage.removeItem('searchValue');
  };

  const sendHandleClick = async () => {
    console.log('Searching');
    const obj = await GetCharacterByName(searchState);
    setTimeout(() => console.log(obj, searchState), 0);
    GetCharacterByName(searchState).then((characterByName) =>
      updateCartList(characterByName.results)
    );
    // updateCartList(obj.results);
  };

  return (
    <form className="search-bar">
      <label className="search-label-input">Search:</label>
      <input
        className="search-input"
        placeholder="Search"
        onChange={inputHandler}
        value={searchState}
      />
      <input type="button" value="Search" onClick={sendHandleClick} />
      <input type="button" value="Clear" onClick={clearHandleClick} />
    </form>
  );
};
export default SearchBar;
