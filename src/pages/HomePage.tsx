import CartList from '../components/CartList';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import GetAllCharacters from '../rickAndMortyApi/GetAllCharacters';
import { CharacterResults } from '../interfaces';
import preloader from '../assets/preloader.gif';
import GetCharacterByName from '../rickAndMortyApi/GetCharacterByName';

function HomePage() {
  const [data, setData] = useState<CharacterResults[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchInputValue = localStorage.getItem('searchValue') || '';

  useEffect(() => {
    !searchInputValue
      ? GetAllCharacters().then((allCharacters) => {
          setData(allCharacters.results);
          setIsLoading(false);
        })
      : GetCharacterByName(searchInputValue).then((characterByName) => {
          setData(characterByName.results);
          setIsLoading(false);
        });
  }, [searchInputValue]);

  return (
    <div className="main-container">
      {isLoading && (
        <div className="preloader-div">
          <img className="preloader" src={preloader} alt="loading" />
        </div>
      )}
      <SearchBar updateCartList={setData} loading={setIsLoading} />
      <CartList characterResults={data} />
    </div>
  );
}

export default HomePage;
