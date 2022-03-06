import React from 'react';
import Checkout from '../paypalCheckout/checkout';
import { useEffect, useContext } from 'react';
import { locationContext } from '../../contexts/locationContext';

const ReviewAccordion = ({
  reviewAccordionBtn,
  reviewAccordionCollapse,
  user,
  handleReviewBack,
  handleReviewNext,
  continuePayment,
  totalOrderPrice,
}) => {
  const { checkedAddress, userLocations } = useContext(locationContext);

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header' id='flush-headingThree'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#flush-collapseThree'
          aria-expanded='false'
          aria-controls='flush-collapseThree'
          disabled
          ref={reviewAccordionBtn}
        >
          Review and Confirm
        </button>
      </h2>
      <div
        id='flush-collapseThree'
        className='accordion-collapse collapse review'
        aria-labelledby='flush-headingThree'
        data-bs-parent='#accordionFlushExample'
        ref={reviewAccordionCollapse}
      >
        <div className='accordion-body review-cards'>
          <div className='review-card'>
            <h4>Billing Address</h4>
            <div className='card-body'>
              <p>
                <strong>Name:</strong> {user.FirstName} {user.LastName}
              </p>
              <p>
                <strong>Mobile:</strong> {user.PhoneNum}
              </p>
              <p>
                <strong>Address:</strong>{' '}
                {userLocations.length !== 0 &&
                  userLocations[checkedAddress].address}
                <br />
                {userLocations.length !== 0 &&
                  userLocations[checkedAddress].building}
              </p>
            </div>
          </div>
          <div className='review-card'>
            <h4>Shipping Address</h4>
            <div className='card-body'>
              <p>
                <strong>Name:</strong> {user.FirstName} {user.LastName}
              </p>
              <p>
                <strong>Mobile:</strong> {user.PhoneNum}
              </p>
              <p>
                <strong>Address:</strong>{' '}
                {userLocations.length !== 0 &&
                  userLocations[checkedAddress].address}
                <br />
                {userLocations.length !== 0 &&
                  userLocations[checkedAddress].building}
              </p>
            </div>
          </div>
          <div className='review-card'>
            <h4>Delivery date and time</h4>
            <div className='card-body'>
              <p>
                <strong>Delivery Date:</strong>
              </p>
              <p>
                <strong>Delivery Time:</strong>
              </p>
              <p>
                <strong>Assembly Time:</strong>
              </p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>
          By clicking the "Continue with the Payment" you indicate that you
          agree to
          <span style={{ color: '#90baf1' }}>Terms and Conditions</span>
        </p>

        <div className='buttons-group'>
          <button className='btn back-button ms-4' onClick={handleReviewBack}>
            BACK
          </button>

          <button className='btn submit-button me-4' onClick={handleReviewNext}>
            CONTINUE WITH THE PAYMENT
          </button>
        </div>

        {continuePayment && <Checkout totalOrderPrice={totalOrderPrice} />}
      </div>
    </div>
  );
};

export default ReviewAccordion;
