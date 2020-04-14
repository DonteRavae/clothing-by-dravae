import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component';


import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <header className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </header>

    {
      cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
    }

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <dive className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/26 - CVV: 123
    </dive>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);