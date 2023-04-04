import { IDataProduct, IDataProductWithKey } from '../interfaces';
import React from 'react';

import './Cart.css';

const Cart = (props: IDataProductWithKey) => {
  const dataProduct: IDataProduct = props.dataProduct;
  return (
    <div className="cart-item">
      <div className="cart-item-img-div">
        <img className="cart-item-img" src={dataProduct.images[0]} alt="" />
      </div>
      <div className="cart-item-title">{dataProduct.title}</div>
      <h4 className="cart-item-description">{dataProduct.description}</h4>
      <ul className="cart-item-list-group">
        <li className="list-group-item">
          <small>
            Price: <span className="ItemPrice">{dataProduct.price}</span> EUR
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Discount: <span className="ItemDiscount">{dataProduct.discountPercentage}</span> %
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Rating: <span className="ItemRating">{dataProduct.rating}</span>
          </small>
        </li>
        <li className="list-group-item">
          <small>
            Stock: <span className="ItemStock">{dataProduct.stock}</span>
          </small>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
