import React, { useRef, useEffect } from 'react';

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';

const PayPal = () => {
  const paypal = useRef();

  useEffect(() => {
    // paypal.Buttons({}).render(paypal.current);
    // PayPalButtons({}).ren
  }, []);

  return (
    <>
      <div ref={paypal}></div>
    </>
  );
};

export default PayPal;
