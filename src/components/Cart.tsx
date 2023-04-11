import { CharacterResults, CharacterResultState } from '../interfaces';
import React, { useState } from 'react';

import './Cart.css';
import CartModal from './CartModal';

const Cart = (data: CharacterResultState) => {
  const dataProduct: CharacterResults = data.characterResult;
  const [showCartItem, setShowCartItemCartItem] = useState(false);
  return (
    <div
      className="cart-item"
      data-testid="cart-item"
      onClick={() => setShowCartItemCartItem(true)}
    >
      <div className="cart-item-img-div">
        <img className="cart-item-img" src={dataProduct.image} alt="" />
      </div>
      <div className="cart-item-name">{dataProduct.name}</div>
      {showCartItem && (
        <CartModal characterResult={dataProduct} closeModal={setShowCartItemCartItem} />
      )}
    </div>
  );
};

export default Cart;
