import React, { useState, useEffect, useContext } from 'react';
import { locationContext } from '../../contexts/locationContext';

const AddressForm = ({
  handleAddressForm,
  register,
  locations,
  locationsExist,
  gov,
  setGov,
}) => {
  // const { gov, setGov } = useContext(locationContext);

  const [areas, setAreas] = useState([]);

  const handleGovSelect = e => {
    locations.forEach(loc => {
      if (loc.Name === e.target.value) {
        setAreas(loc.Areas);
        setGov({ ...gov, gov: e.target.value });
      }
    });
  };

  const handleAreaSelect = e => {
    locations.forEach(loc => {
      if (loc.Areas.includes(e.target.value)) {
        loc.Areas.forEach(area => {
          if (area === e.target.value) setGov({ ...gov, area: e.target.value });
        });
      }
    });
  };

  useEffect(() => {
    console.log(areas);
    // setGov({ ...gov, area: a });
  }, [areas]);

  return (
    <>
      <form onSubmit={handleAddressForm} className='address-form mt-3'>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Full Name'
            name='name'
            {...register('name')}
            required
          />
        </div>
        <select
          className='form-select form-control mb-3'
          defaultValue={'default'}
          onChange={handleGovSelect}
          required
        >
          <option disabled value='default'>
            Select Governorate
          </option>

          {locations?.map(loc => (
            <option value={loc.Name} key={locations.indexOf(loc)}>
              {loc.Name}
            </option>
          ))}
        </select>
        <select
          className='form-select form-control mb-3'
          defaultValue={'default'}
          onChange={handleAreaSelect}
          required
        >
          <option disabled value='default'>
            Select Area
          </option>

          {areas?.map(area => (
            <option value={area} key={areas.indexOf(area)}>
              {area}
            </option>
          ))}
        </select>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            placeholder='sample1@sample.com'
            name='email'
            {...register('email')}
            required
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Address'
            name='address'
            {...register('address')}
            required
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Building Name/Apartment No./Floor No.'
            name='building'
            {...register('building')}
            required
          />
        </div>
        <small className='mb-3'>
          * If there is no elevator in the building, we will deliver up to the
          4th floor. Otherwise, the delivery to the desired floor will be on the
          customer responsibility.
        </small>
        <div className='form-check mb-3'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            name='isUsedAsShippingAddress'
            {...register('isUsedAsShippingAddress')}
          />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            <small>Use as shipping address</small>
          </label>
        </div>

        <input type='submit' className='btn submit-button' />
      </form>
    </>
  );
};

export default AddressForm;
