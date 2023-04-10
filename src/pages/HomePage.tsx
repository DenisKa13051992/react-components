import CartList from '../components/CartList';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import GetAllCharacters from '../rickAndMortyApi/GetAllCharacters';
import { CharacterResults } from '../interfaces';

function HomePage() {
  const [data, setData] = useState<CharacterResults[]>([]);

  useEffect(() => {
    GetAllCharacters().then((allCharacters) => setData(allCharacters.results));
  }, []);

  return (
    <div className="main-container">
      <SearchBar />
      <CartList characterResults={data} />
    </div>
  );
}

export default HomePage;
