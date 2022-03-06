import React, { useState } from 'react';
import AddressForm from './addressForm';
import { useEffect } from 'react';

const AddressAccordion = ({
  addressAccordionBtn,
  addressAccordionCollapse,
  user,
  setAddressCollapse,
  addressCollapse,
  handleAddressForm,
  register,
  locations,
  handleAddressNext,
  onAddressSelect,
}) => {
  const [selectedAddress, setSelectedAddress] = useState(0);

  const getCheckedAddress = e => {
    setSelectedAddress(e.target.value);
    onAddressSelect(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <>
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
                      defaultChecked={
                        user.Locations.indexOf(loc) === selectedAddress
                      }
                      onClick={getCheckedAddress}
                    />
                    <div className='card-body'>
                      <p>
                        <strong>Name:</strong> {user.FirstName} {user.LastName}
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
    </>
  );
};

export default AddressAccordion;
