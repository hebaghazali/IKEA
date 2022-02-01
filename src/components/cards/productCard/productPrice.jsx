import React from 'react';

const ProductPrice = ({Price,SalePrice}) => {
  return (
    <div className='price'>
      {SalePrice&&
      <div className='line-through text-decoration-line-through'>
        <sup>EGP {SalePrice}</sup>
      </div>}
      <div className='original-price'>
        <sup>EGP</sup>
        <span>
          <strong> {Price} </strong>
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;
