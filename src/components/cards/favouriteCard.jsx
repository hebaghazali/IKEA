import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/scss/pages/_favourite.scss';
import { removeFromFav, setFavItemAmount } from '../../store/actions/favourits';
import {
  addCartItemToUser,
  removeFavItemFromUser,
} from '../../services/firebase';
import { useTranslation } from 'react-i18next';
import { addToCart } from '../../store/actions/cartProducts';

const FavouriteCard = (props) => {
  const { t } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(1);

  const { cartProducts } = useSelector((state) => state.cartProducts);
  let foundInCart = cartProducts?.find(i => i.id === props.id);
  const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeFromFav(props.id));
    dispatch(setFavItemAmount(props.id, 0));

    removeFavItemFromUser(localStorage.getItem('UID'), props.id);
  };

  const selectAmount = (event) => {
    setSelectedAmount(Number(event.target.value));
  };

  const addCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        productData: props.product,
        PurchasedAmount: selectedAmount,
      })
    );
    setInCart(true);

    addCartItemToUser(localStorage.getItem('UID'), props.id);
  };

  useEffect(() => {
    dispatch(
      setFavItemAmount({ id: props.id, PurchasedAmount: selectedAmount })
    );
  }, [dispatch, props.id, selectedAmount]);

  return (
    <>
      <div className='shop-section'>
        <div className='shop-icon'>
          <button className='prod-box' onClick={() => deleteItem()}>
            <i className='fas fa-trash-alt'></i>
          </button>

          <div className='prod-box'>
            <select defaultValue={selectedAmount} onChange={selectAmount}>
              {(() => {
                const options = [];
                for (let i = 0; i < props.product.Quantity; i++) {
                  options.push(<option key={i + 1}>{i + 1}</option>);
                }
                return options;
              })()}
            </select>
          </div>
        </div>

        <div className='shopping-img'>
          <img src={props.product.Images[0]} alt='...' />
        </div>

        <div className='shopping-info'>
          <h6>{props.product.Name}</h6>
          <p>{props.product.Description}</p>
          <h6>
            {t('EGP')} {props.product.Price}
          </h6>
          <p className='txt-info'>
            {props.product.Material}, {props.product.Width} x{' '}
            {props.product.Length}
          </p>
          {/* <!-- button For Shopping --> */}
          <div className='prod-box col-5'>
            <button
              className={`btn card-button ${inCart && 'disabled'}`}
              onClick={addCart}
            >
              <i className='fas fa-shopping-bag'></i>{' '}
              {!inCart ? t('AddToCart') : t('Added')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FavouriteCard;
