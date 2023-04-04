import CartList from '../components/CartList';
import React from 'react';
import SearchBar from '../components/SearchBar';

function HomePage() {
  return (
    <div className="main-container">
      <SearchBar />
      <CartList />
    </div>
  );
}

export default HomePage;
