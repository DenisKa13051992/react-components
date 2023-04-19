import CartList from '../components/CartList';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import GetAllCharacters from '../rickAndMortyApi/GetAllCharacters';
import { CharacterResults } from '../interfaces';
import preloader from '../assets/preloader.gif';
import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';
import { useAppSelector } from '../hooks/redux';
import { useSearchCardsQuery } from '../store/apiSlice';

function HomePage() {
  // const searchInputValue = localStorage.getItem('searchValue') || '';
  const search = useAppSelector((state) => state.search.searchValue);
  const { data, isLoading, isError } = useSearchCardsQuery(search || '');
  console.log(search);

  // useEffect(() => {
  //   !searchInputValue
  //     ? GetAllCharacters()
  //         .then((allCharacters) => {
  //           setData(allCharacters.results);
  //         })
  //         .catch(() => {
  //           setData([]);
  //         })
  //     : GetCharacterByName(searchInputValue)
  //         .then((characterByName) => {
  //           setData(characterByName.results);
  //         })
  //         .catch(() => {
  //           setData([]);
  //         });
  //   setIsLoading(false);
  // }, [searchInputValue]);

  return (
    <div className="main-container">
      <h1 className="rick-and-morty-title">Rick and Morty characters</h1>
      {isLoading && (
        <div className="preloader-div">
          <img className="preloader" src={preloader} alt="loading" />
        </div>
      )}
      <SearchBar />
      {isError && <h1>characters not found</h1>}
      {data && <CartList characterResults={data} />}
    </div>
  );
}

export default HomePage;
