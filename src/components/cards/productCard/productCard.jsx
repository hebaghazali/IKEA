import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../../store/actions/favourits';

import ProductPrice from './productPrice';
import ProductVariant from './productVariant';
import { addToCart } from './../../../store/actions/cartProducts';

const ProductCard = ({ showOptions, pId }) => {
  const productData = {
    Price: 1000,
    Name: 'name',
    Material: 'material',
    SalePrice: 500,
    Width: 30,
    Length: 100,
  };
  const { Name, Material, Price, SalePrice, Width, Length } = productData;

  const { favourits } = useSelector((state) => state.favourits);
  const { cartProducts } = useSelector((state) => state.cartProducts);
  
  let found = favourits?.find((i) => i.id === pId);
  let foundInCart = cartProducts?.find((i) => i.id === pId);

  const [isFavourite, setIsFavourite] = useState(found ? true : false);
  const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(
      isFavourite ? removeFromFav(pId) : addToFav({ id: pId, productData })
    );
    setIsFavourite(!isFavourite);
  };

  const addCart = () => {
    dispatch(addToCart({ id: pId, productData }));
    setInCart(true);
  };

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

          <button onClick={toggleFavourite}>
            <i className={isFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
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

          {!showOptions && !inCart && (
            <p className='more-options'>More options</p>
          )}
          {!inCart && (
            <button className='card-icon' onClick={addCart}>
              <i className='fas fa-cart-plus'></i>
            </button>
          )}
        </div>

        {showOptions && (
          <div className='row mt-3'>
            <small className='col-12'>more variants</small>
            <ProductVariant />
            <ProductVariant />
            <ProductVariant />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
