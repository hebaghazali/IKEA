import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { removeFromCart, setCartItemAmount } from "../../store/actions/cartProducts";

const CartCard = (props) => {
    const [selectedAmount,setSelectedAmount] = useState(props.purchasedQuantity);
    const dispatch = useDispatch();

    const deleteItem = ()=>{
        dispatch(removeFromCart(props.id));
        dispatch(setCartItemAmount(props.id,0))
    }
    useEffect(()=>{
        dispatch(setCartItemAmount({id:props.id,PurchasedAmount:selectedAmount}))
    },[selectedAmount]);
  return (
    <>
      <div className='shop-section'>
        <div className='shop-icon'>
          <button className='prod-box'
          onClick={()=>deleteItem()}
          >
            <i className='fas fa-trash-alt'></i>
          </button>

          <div className='prod-box'>
            <select defaultValue={selectedAmount}>
              {(() => {
                const options = [];
                for (let i = 0; i < props.product.Quantity; i++) {
                  options.push(<option key={i+1} onClick={()=>setSelectedAmount(i+1)}>{i+1}</option>);
                }
                return options;
              })()}
            </select>
          </div>
        </div>

        <div className='shopping-img'>
          <img
            src={props.product.Images[0]}
            alt='...'
          />
        </div>

        <div className='shopping-info'>
          <h6>{props.product.Name}</h6>
          <p>{props.product.Description}</p>
          <h6>EGP {props.product.Price}</h6>
          <p className='txt-info'>
            {props.product.Material}, {props.product.Width} x {props.product.Length}
          </p>
          <span>
            Subtotal: <strong>EGP {props.product.Price * selectedAmount}</strong>
          </span>
        </div>
      </div>
    </>
  );
};
export default CartCard;
