import CartList from '../components/CartList';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import GetAllCharacters from '../rickAndMortyApi/GetAllCharacters';
import { CharacterResults } from '../interfaces';
import preloader from '../assets/preloader.gif';

function HomePage() {
  const [data, setData] = useState<CharacterResults[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetAllCharacters().then((allCharacters) => {
      setData(allCharacters.results);
      setIsLoading(false);
    });
  }, []);

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
