import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../../store/actions/favourits';
import { addFavItemsToUser } from '../../../services/firebase';
import ProductPrice from './productPrice';
import ProductVariant from './productVariant';
import { addToCart } from './../../../store/actions/cartProducts';
import { addCartItemToUser } from '../../../services/firebase';
import { Link } from 'react-router-dom';
import { getCollection } from './../../../services/firebase';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ showOptions, pId, productData , roomBtn ,baseUrl}) => {
  const { favourits } = useSelector(state => state.favourits);
  const { cartProducts } = useSelector(state => state.cartProducts);
  const { t } = useTranslation();

  let found = favourits?.find(i => i.id === pId);
  let foundInCart = cartProducts?.find(i => i.id === pId);

  const [isFavourite, setIsFavourite] = useState(found ? true : false);
  const [inCart, setInCart] = useState(foundInCart ? true : false);
  const [isHovering, setIsHovering] = useState(false);
  const [variants, setVariants] = useState(null);
  const [viewedProduct, setViewedProduct] = useState({ pId, productData });
  const { Name, ProductName, Price, SalePrice, Width, Length, Images, Height } =
    viewedProduct.productData;

  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(
      isFavourite ? removeFromFav(pId) :
      
      addToFav({ id: pId, productData }));
      setInCart(true);

    addFavItemsToUser(localStorage.getItem('UID'), pId);
    setIsFavourite(!isFavourite);
    // let productData2 = productData;
    // productData2.Color = 'green';
    // productData2.Price = 13000;
    // productData2.Images =['https://www.ikea.com/eg/en/images/products/smastad-loft-bed-white-green-with-desk-with-3-drawers__0946955_pe798328_s5.jpg?f=s','https://www.ikea.com/eg/en/images/products/smastad-loft-bed-white-green-with-desk-with-3-drawers__0939878_pe794702_s5.jpg?f=s']

    // addData(productData2);
  };

  const addCart = () => {
    dispatch(addToCart({ id: pId, productData, PurchasedAmount: 1 }));
    setInCart(true);

    addCartItemToUser(localStorage.getItem('UID'), pId);
  };

  const getVariants = () => {
    getCollection('Products', ['ProductName', '==', ProductName])
      .then(res => {
        setVariants(res);
        console.log('variants', res);
      })
      .catch(err => console.log('error :', err));
  };

  useEffect(() => {
    showOptions && getVariants();
  }, []);

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

        <div className='mt-1 position-relative'>
          <Link
            className='card category-card col-12 '
            to={{
              // pathname: '/products/' + viewedProduct.pId,
              pathname:baseUrl? `${baseUrl}/${Name}/${viewedProduct.pId}`: '/products/' + viewedProduct.pId,
              state: {
                prod: {
                  id: viewedProduct.pId,
                  productData: viewedProduct.productData,
                },
              },
            }}
          >
            <img
              src={roomBtn?Images[isHovering ? 0 : 1] :Images[isHovering ? 1 : 0]}
              className='card-img-top'
              alt={Name}
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </Link>
          {/*TODO: if created recently  */}
          <strong className='new'>{t('New')}</strong>
          {SalePrice && <p className='product-highlight'>{t('LimitedOffer')}</p>}
          {/* <p>{Material}</p> */}
          <p className='product-header'>{ProductName}</p>
          <p className='product-description'>{Name}</p>

          {/*TODO: add feature field in db*/}
          <p>{Width && `${Width} * ${Length ? Length : Height} ${t('cm')}`}</p>
          <ProductPrice Price={Price} SalePrice={SalePrice} />

          {!showOptions && !inCart && (
            <p className='more-options'>{t('MoreOptions')}</p>
          )}
          {!inCart && (
            <button className='card-icon' onClick={addCart}>
              <i className='fas fa-cart-plus'></i>
            </button>
          )}
        </div>

        {variants && (
          <div className='row mt-3'>
            <small className='col-12'>{t('MoreVariants')}</small>

            {variants.map(item => (
              <ProductVariant
                key={item.id}
                product={item}
                viewedId={viewedProduct.pId}
                chooseVariant={() =>
                  setViewedProduct({ pId: item.id, productData: item.data() })
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
