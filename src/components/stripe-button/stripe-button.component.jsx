import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe will consider the price amount in cents
  const publishableStripeKey = process.env.REACT_APP_STRIPE_API_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Glee Fashion Mart"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/kFm.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableStripeKey}
    />
  );
};

export default StripeCheckoutButton;

//https://svgshare.com/i/CUz.svg