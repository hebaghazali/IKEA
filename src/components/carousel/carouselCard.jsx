import React from 'react';

const CarouselCard = props => {
  const { productData } = props;

  return (
    <>
      {productData && (
        <div className='col-6 col-lg-3'>
          <img className='w-100' src={productData.Images[0]} alt='' />
          <p className='product-highlight'>Limited time offer</p>
          <p className='product-header'>{productData.ProductName}</p>
          <p className='product-description'>{productData.Name}</p>
          <div className='price'>
            {/* <div className='line-through'>
            <sup>{productData.lineThroughPrice}</sup>
          </div> */}
            <div className='original-price'>
              <sup>EGP</sup>
              <span>
                <strong>
                  {productData.Price ? (
                    productData.Price
                  ) : (
                    <>
                      {productData.packs}
                      <sub>/{productData.perPack}</sub>
                    </>
                  )}
                </strong>
              </span>
            </div>
          </div>
          <p className='more-options'>More options</p>
        </div>
      )}
    </>
  );
};

export default CarouselCard;
