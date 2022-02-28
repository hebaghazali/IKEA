import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartCard from '../components/cards/cartCard';

const ShoppingCart = () => {
  const itemsCount = useSelector(
    state => state.cartProducts.totalAmountOfCartItems
  );
  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const totalOrderPrice = useSelector(state => state.cartProducts.totalPrice);

  return (
    <>
      <div className='fav-parent'>
        <div className='container'>
          <div className='shopping-header'>
            <h3>Shopping cart</h3>
            <h6>{itemsCount} items in shopping bag</h6>
            <div className='shopping-total-price'>
              <h6>Total For This Order incl. VAT</h6>
              <h4>EGP {totalOrderPrice}</h4>
            </div>
            <div className='shopping-total-price d-flex flex-row-reverse'>
              <Link to='/checkout'>
                <button>Begin Checkout</button>
              </Link>
            </div>
          </div>
          <section className='row shopping-page'>
            <section className='col-12 left-shopping-page'>
              {cartItems.map(item => {
                return (
                  <CartCard
                    id={item.id}
                    key={item.id}
                    product={item.productData}
                    purchasedQuantity={item.PurchasedAmount}
                  />
                );
              })}
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
