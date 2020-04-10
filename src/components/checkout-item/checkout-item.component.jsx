import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10096;</div>
          <span className="value">{quantity}</span> 
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10097;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)), 
  removeItem: item => dispatch(removeItem(item)), //You're going to have to fix this
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);