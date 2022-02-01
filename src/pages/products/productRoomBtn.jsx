import React from 'react';

const ProductRoomBtn = ({ totalItems }) => {
  return (
    <div className='col-12 col-lg-4 d-flex filter-right-side align-items-center'>
      <p className='d-inline-flex no-of-items'>{totalItems} items</p>
      <div className='btn-group me-2' role='group' aria-label='First group'>
        <button type='button' className='btn btn-outline-secondary'>
          Product
        </button>
        <button type='button' className='btn btn-outline-secondary'>
          Room
        </button>
      </div>
    </div>
  );
};

export default ProductRoomBtn;
