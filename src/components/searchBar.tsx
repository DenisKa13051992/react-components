import React, { ChangeEvent, useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchState, setSearchState] = useState(localStorage.getItem('searchValue') || '');
  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchState(inputValue);
    localStorage.setItem('searchValue', inputValue);
  };

  const clearHandleClick = () => {
    setSearchState('');
    localStorage.removeItem('searchValue');
  };

  const sendHandleClick = () => {
    console.log('Searching');
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
      <input type="button" value="Send" onClick={sendHandleClick} />
      <input type="button" value="Clear" onClick={clearHandleClick} />
    </form>
  );
};
export default SearchBar;
