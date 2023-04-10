import { ModalCartState } from '../interfaces';
import React from 'react';

import './Cart.css';

const CartModal = (data: ModalCartState) => {
  const { characterResult, closeModal }: ModalCartState = data;
  return (
    <div
      className="cart-modal-overlay"
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.cart-modal-item') || target.closest('.cart-modal-close')) {
          closeModal(false);
        }
        event.stopPropagation();
      }}
    >
      <div className="cart-item cart-modal-item">
        <div className="cart-modal-close">x</div>
        <div className="cart-item-img-div">
          <img className="cart-item-img" src={characterResult.image} alt="" />
        </div>
        <div className="cart-item-name">{characterResult.name}</div>
        <ul className="cart-item-list-group">
          <li className="list-group-item">
            <small>
              Species: <span className="Item-species">{characterResult.species}</span>
            </small>
          </li>
          <li className="list-group-item">
            <small>
              Gender: <span className="Item-gender">{characterResult.gender}</span>
            </small>
          </li>
          <li className="list-group-item">
            <small>
              Status: <span className="Item-status">{characterResult.status}</span>
            </small>
          </li>
          <li className="list-group-item">
            <small>
              Location: <span className="Item-location">{characterResult.location.name}</span>
            </small>
          </li>
          <li className="list-group-item">
            <small>
              Episode:
              <span className="Item-episode">
                {parseInt(String(characterResult.episode[0].match(/\d+/)))}
              </span>
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
