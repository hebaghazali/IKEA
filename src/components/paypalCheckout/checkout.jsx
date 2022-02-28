import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './checkout.scss';

const initialOptions = {
  'client-id':
    'AdcMFkqM5zNdxccrf64_CI0lHw2UesXgqBiubND4BpmVJv8_5ZcjrBBfIp9-gSD2mjws8n6Dk3GedXwD',
  currency: 'EUR',
  intent: 'capture',
  // 'data-client-token': 'abc123xyz==',
};

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: '1.99',
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
