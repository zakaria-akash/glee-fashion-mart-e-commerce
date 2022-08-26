import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe will consider the price amount in cents
  const publishableStripeKey =
    "pk_test_51LYVRDSBtk2d5KqhUEskeyVTBw7HE67E7H9pdb4yXjc3HgEnWQgQwdCW4t2QhBhdBiVmyjLTr5yrV2Vl72Kd8kh300HzzeDJ42";

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
