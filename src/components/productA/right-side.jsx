import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './../../store/actions/cartProducts';
import { useTranslation } from 'react-i18next';
import { addCartItemToUser } from '../../services/firebase';
const RightSide = (props) => {
  const { t , i18n } = useTranslation();
  const {
    Images,
    Price,
    Name,
    NameAr,
    Color,
    ColorAr,
    Description,
    DescriptionAr,
    SubCategory,
    ProductName,
    Quantity,
  } = props.prod.productData;
  const pId = props.prod.id;

  const { cartProducts } = useSelector((state) => state.cartProducts);

  let found = cartProducts?.find((i) => i.id === pId);
  const [added, setAdded] = useState(found ? true : false);
  const dispatch = useDispatch();
  const addToBag = () => {
    const { productData } = props.prod;
    dispatch(addToCart({ id: pId, productData, PurchasedAmount: 1 }));
    setAdded(true);
    addCartItemToUser(localStorage.getItem('UID'), pId);
  };
  return (
    <>
      <div className='col-12 col-md-4 right'>
        <div className='head'>
          <p>
            <b> {ProductName}</b>
          </p>
          <span className='span ms-5'>
            <b>
              {Price} {t('EGP')}
            </b>
          </span>
        </div>
        <div>
          {i18n.language=='en'?Name:NameAr}, {i18n.language=='en'?Color:ColorAr}
          {/* {SubCategory=='PH6KZW35bbvGRBdbQ8pe'&&
                   <span >Mattress and bedlinen are sold separately.</span>} */}
        </div>

        <div id='right-btn '>
          <button
            className={`col-7 mb-3 btn btn-primary rounded-pill ${
              added && 'disabled'
            }`}
            onClick={addToBag}
          >
            {!added ? t('AddToCart') : t('Added')}
          </button>
        </div>

        <p>
          <span className='me-1'>
            <i className='fas fa-truck right-icon'></i>
          </span>
          <span> {t('SeeDeliveryOptions')}</span>
        </p>

        <hr />

        <p>
          <span className='me-1'>
            <i className='fas fa-solid fa-store right-icon'> </i>
          </span>
          {(Quantity > 2 )&& (
            <span>
              {t('AvailableInStock')} : {Quantity}{' '}
            </span>
          )}
          {(Quantity<=2 && Quantity!==0) && (
            <span className='text-danger'>
              {Quantity} {t('OnlyInStock')}
            </span>
          )
          }
          {(Quantity===0) &&
            <span className='text-danger'>
            {t('OutOfStock')}
          </span>
          }
        </p>
      </div>
    </>
  );
};

export default RightSide;
