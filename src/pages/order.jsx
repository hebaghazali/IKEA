import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import {
  getDocumentByID,
  setUserLocation,
  updateUserStorageByID,
} from '../services/firebase';
import AddressForm from './../components/order/addressForm';
import Checkout from './../components/paypalCheckout/checkout';

const Order = () => {
  const [locations, setLocations] = useState();

  const user = useSelector(state => state.user.user);

  const purchasedItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  const { register, getValues } = useForm();

  const addressAccordionBtn = useRef();
  const invoiceAccordionBtn = useRef();
  const reviewAccordionBtn = useRef();

  const addressAccordionCollapse = useRef();
  const invoiceAccordionCollapse = useRef();
  const reviewAccordionCollapse = useRef();

  const handleAddressForm = e => {
    e.preventDefault();

    setUserLocation(localStorage.getItem('UID'), getValues());

    handleAddressNext();
  };

  const handleAddressNext = () => {
    addressAccordionBtn.current.classList.add('collapsed');
    addressAccordionCollapse.current.classList.add('collapse');

    invoiceAccordionBtn.current.classList.remove('collapsed');
    invoiceAccordionCollapse.current.classList.remove('collapse');
  };

  const handleInvoiceBack = () => {
    invoiceAccordionBtn.current.classList.add('collapsed');
    invoiceAccordionCollapse.current.classList.add('collapse');

    addressAccordionBtn.current.classList.remove('collapsed');
    addressAccordionCollapse.current.classList.remove('collapse');
  };

  const handleInvoiceNext = () => {
    invoiceAccordionBtn.current.classList.add('collapsed');
    invoiceAccordionCollapse.current.classList.add('collapse');

    reviewAccordionBtn.current.classList.remove('collapsed');
    reviewAccordionCollapse.current.classList.remove('collapse');
  };

  const handleReviewBack = () => {
    reviewAccordionBtn.current.classList.add('collapsed');
    reviewAccordionCollapse.current.classList.add('collapse');

    invoiceAccordionBtn.current.classList.remove('collapsed');
    invoiceAccordionCollapse.current.classList.remove('collapse');
  };

  const [continuePayment, setContinuePayment] = useState(false);

  const handleReviewNext = () => {
    setContinuePayment(true);
  };

  const getCheckedAddress = e => {
    console.log(e.target.value);
  };

  useEffect(() => {
    getDocumentByID('governorate', 'VZsmOmwYmRM8qL2TAnqR').then(data => {
      setLocations(data.Governorates);
    });
  }, []);

  const [addressCollapse, setAddressCollapse] = useState(true);

  return (
    <>
      <div className='order-container'>
        <div className='accordion accordion-flush' id='accordionFlushExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
                disabled
                ref={addressAccordionBtn}
              >
                Billing and Shipping Address
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse'
              aria-labelledby='flush-headingOne'
              data-bs-parent='#accordionFlushExample'
              ref={addressAccordionCollapse}
            >
              <div className='accordion-body'>
                <h4>Billing Address</h4>

                {user.Locations ? (
                  <>
                    {user.Locations.map(loc => (
                      <div
                        className='form-check shipping-address-card'
                        key={user.Locations.indexOf(loc)}
                      >
                        <input
                          className='form-check-input'
                          type='radio'
                          name='address-radio'
                          value={user.Locations.indexOf(loc)}
                          checked
                          onChange={getCheckedAddress}
                        />
                        <div className='card-body'>
                          <p>
                            <strong>Name:</strong> {user.FirstName}{' '}
                            {user.LastName}
                          </p>
                          <p>
                            <strong>Mobile:</strong> {user.PhoneNum}
                          </p>
                          <p>
                            <strong>Address:</strong> {loc.address}
                            <br />
                            {loc.building}
                          </p>
                        </div>
                      </div>
                    ))}
                    <button
                      className='btn shipping-address-btn my-3'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#addressCollapse'
                      onClick={() => setAddressCollapse(!addressCollapse)}
                    >
                      ADD NEW SHIPPING ADDRESS
                    </button>
                    <div className='collapse' id='addressCollapse'>
                      <div className='card card-body'>
                        <AddressForm
                          handleAddressForm={handleAddressForm}
                          register={register}
                          locations={locations}
                        ></AddressForm>
                      </div>
                    </div>
                  </>
                ) : (
                  <AddressForm
                    handleAddressForm={handleAddressForm}
                    register={register}
                    locations={locations}
                  ></AddressForm>
                )}

                {addressCollapse && (
                  <div className='buttons-group'>
                    <button></button>
                    <button
                      className='btn submit-button me-4'
                      onClick={handleAddressNext}
                    >
                      CONTINUE
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
                disabled
                ref={invoiceAccordionBtn}
              >
                Delivery Invoice
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse invoice'
              ref={invoiceAccordionCollapse}
              aria-labelledby='flush-headingTwo'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                {purchasedItems.map(item => {
                  return (
                    <div
                      key={purchasedItems.indexOf(item)}
                      className='purchased-item-card'
                    >
                      <div className='left'>
                        <img src={item.productData.Images[0]} alt='product' />
                        <div className='product-details ms-3'>
                          <p>
                            <span>{item.PurchasedAmount} x </span>
                            <strong>{item.productData.ProductName}</strong>
                          </p>
                          <p>
                            {item.productData.ProductName}{' '}
                            {item.productData.Name}
                          </p>
                          <p>
                            <strong>EGP {item.productData.Price}</strong>
                          </p>
                        </div>
                      </div>
                      <div className='right'>
                        <p>
                          <strong>
                            EGP {item.PurchasedAmount * item.productData.Price}
                          </strong>
                        </p>
                      </div>
                    </div>
                  );
                })}
                <p className='total-price'>
                  Order Total: <strong>EGP {totalOrderPrice}</strong>
                </p>
              </div>

              <div className='buttons-group'>
                <button
                  className='btn back-button ms-4'
                  onClick={handleInvoiceBack}
                >
                  BACK
                </button>

                <button
                  className='btn submit-button me-4'
                  onClick={handleInvoiceNext}
                >
                  CONTINUE
                </button>
              </div>
            </div>
          </div>
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
                      {user.Locations && user.Locations[0].address}
                      <br />
                      {user.Locations && user.Locations[0].building}
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
                      {user.Locations && user.Locations[0].address}
                      <br />
                      {user.Locations && user.Locations[0].building}
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
                By clicking the "Continue with the Payment" you indicate that
                you agree to
                <span style={{ color: '#90baf1' }}>Terms and Conditions</span>
              </p>

              <div className='buttons-group'>
                <button
                  className='btn back-button ms-4'
                  onClick={handleReviewBack}
                >
                  BACK
                </button>

                <button
                  className='btn submit-button me-4'
                  onClick={handleReviewNext}
                >
                  CONTINUE WITH THE PAYMENT
                </button>
              </div>

              {continuePayment && <Checkout />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
