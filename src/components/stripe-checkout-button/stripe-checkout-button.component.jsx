import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const publishableKey = 'pk_test_zyhntLxrJeHj695hws9r44EU007Fv6C0pe';
  const stripePrice = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Purchase Successful!');
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Clothing by D'Ravae, LLC"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      local="us"
      amount={stripePrice}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      token={onToken}
    />
  )
}

export default StripeCheckoutButton;