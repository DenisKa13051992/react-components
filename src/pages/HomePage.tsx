import CartList from '../components/CartList';
import React from 'react';
import SearchBar from '../components/SearchBar';
import preloader from '../assets/preloader.gif';
import { useAppSelector } from '../hooks/redux';
import { useSearchCardsQuery } from '../store/apiSlice';

function HomePage() {
  const search = useAppSelector((state) => state.search.searchValue);
  const { data, isLoading, isError } = useSearchCardsQuery(search || '');
  console.log(search);

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
