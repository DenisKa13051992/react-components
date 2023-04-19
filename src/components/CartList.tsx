import React from 'react';
import { CharacterResults, CharacterResultsState } from '../interfaces';
import './Cart.css';
import Cart from './Cart';

const CartList = (data: CharacterResultsState) => {
  return (
    <div className="cart-list">
      {data &&
        data.characterResults.map((item: CharacterResults) => (
          <Cart characterResult={item} key={item.id} />
        ))}
    </div>
  );
};

export default CartList;
