import { CharacterResults, CharacterResultState } from '../interfaces';
import React from 'react';

import './Cart.css';

const Cart = (data: CharacterResultState) => {
  const dataProduct: CharacterResults = data.characterResult;
  return (
    <div className="cart-item">
      <div className="cart-item-img-div">
        <img className="cart-item-img" src={dataProduct.image} alt="" />
      </div>
      <div className="cart-item-name">{dataProduct.name}</div>
      <ul className="cart-item-list-group">
        <li className="list-group-item">
          <small>
            Species: <span className="Item-species">{dataProduct.species}</span>
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Gender: <span className="Item-gender">{dataProduct.gender}</span>
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Status: <span className="Item-status">{dataProduct.status}</span>
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Location: <span className="Item-location">{dataProduct.location.name}</span>
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Episode:{' '}
            <span className="Item-episode">
              {parseInt(String(dataProduct.episode[0].match(/\d+/)))}
            </span>
          </small>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
