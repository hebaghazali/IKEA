import React from 'react';

const CarouselCard = props => {
  const { products } = props;

  return (
    <>
      {products.map(product => (
        <div className='col-6 col-lg-3' key={products.indexOf(product)}>
          <img className='w-100' src={product.imageURL} alt='' />
          <p className='product-highlight'>{product.highlight}</p>
          <p className='product-header'>{product.header}</p>
          <p className='product-description'>{product.description}</p>
          <div className='price'>
            <div className='line-through'>
              <sup>{product.lineThroughPrice}</sup>
            </div>
            <div className='original-price'>
              <sup>{product.originalPrice.currency}</sup>
              <span>
                <strong>
                  {product.originalPrice.price ? (
                    product.originalPrice.price
                  ) : (
                    <>
                      {product.originalPrice.packs}
                      <sub>/{product.originalPrice.perPack}</sub>
                    </>
                  )}
                </strong>
              </span>
            </div>
          </div>
          <p className='more-options'>More options</p>
        </div>
      ))}
    </>
  );
};

export default CarouselCard;
