import React from 'react';
import ProductPrice from './productPrice';
import ProductVariant from './productVariant';

const ProductCard = ({showOptions}) => {
  const productData = {
    Price: 1000,
    Name: 'name',
    Material: 'material',
    SalePrice: 500,
    Width: 30,
    Length: 100,
  };
  const { Name, Material, Price, SalePrice, Width, Length } = productData;
  return (
    <>
      <div className='col-6 col-md-4 col-lg-3 prod-container'>
        <header
          className='d-flex align-items-center justify-content-between'
          style={{ padding: '.625rem' }}
        >
          <div className='form-check'>
            {/*TODO:  late feature */}
            {/* <input className='form-check-input' type='checkbox' value='' id='' />
            <small>Compare</small> */}
          </div>

          <i className='far fa-heart '></i>
        </header>

        <a className='card category-card col-12 ' href='../productsA.html'>
          <img
            src='https://www.ikea.com/eg/en/images/products/soederhamn-chaise-longue-samsta-orange__0802365_pe768432_s5.jpg?f=xxs'
            className='card-img-top'
            alt='sofa'
          />
        </a>

        <div className='mt-1 position-relative'>
          {/*TODO: if created recently  */}
          <strong className='new'>New</strong>
          {SalePrice && <p className='product-highlight'>Limited time offer</p>}
          <p className='product-header'>{Name}</p>
          <p>{Material}</p>

          {/*TODO: add feature field in db*/}
          <p>{Width && `${Width} * ${Length} cm`}</p>
          <ProductPrice Price={Price} SalePrice={SalePrice} />

          {!showOptions && <p className='more-options'>More options</p>}
          <button className='card-icon'>
            <i className='fas fa-cart-plus'></i>
          </button>
        </div>

      { showOptions && <div className='row mt-3'>
          <small className='col-12'>more variants</small>
          <ProductVariant />
          <ProductVariant />
          <ProductVariant />
        </div>}
      </div>
    </>
  );
};

export default ProductCard;
