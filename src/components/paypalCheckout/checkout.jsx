import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './checkout.scss';
import { useSelector } from 'react-redux';

const initialOptions = {
  'client-id':
    'ASbDLGhIXQB7EmCkTpz9g6jG4fSZrAWl0poNKWmjoYDvnCiqdsBy4cn8d4yfwz5CvsjbNqEGrhuMgF5n',
  currency: 'USD',
};

const Checkout = () => {
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  return (
    <div className='checkout-container'>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '5',
                    // value: totalOrderPrice / 16,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            console.log('onApprove Data: ');
            console.log(data);
            return actions.order.capture().then(details => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
          onError={err => {
            console.log('onError: ');
            console.log(err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
