import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../assets/scss/pages/_favourite.scss'
import { removeFromFav, setFavItemAmount } from '../../store/actions/favourits';

const FavouriteCard = (props) => {
  const [selectedAmount, setSelectedAmount] = useState(props.purchasedQuantity);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeFromFav(props.id));
    dispatch(setFavItemAmount(props.id, 0));
  };

  const selectAmount = (event) => {
    setSelectedAmount(Number(event.target.value));
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
          <h6>EGP {props.product.Price}</h6>
          <p className='txt-info'>
            {props.product.Material}, {props.product.Width} x{' '}
            {props.product.Length}
          </p>
          {/* <!-- button For Shopping --> */}
          <div class='prod-box col-5'>
            <button class='card-button'>
              <i class='fas fa-shopping-bag'></i> Add to shopping bag
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FavouriteCard;
