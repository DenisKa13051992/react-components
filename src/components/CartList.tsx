import React, { Component } from 'react';

import './Cart.css';
import products from '../data';
import Cart from './Cart';
import { IDataProduct } from 'interfaces';

class CartList extends Component {
  render() {
    return (
      <div className="cart-list">
        {products.map((item: IDataProduct) => (
          <Cart dataProduct={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default CartList;
