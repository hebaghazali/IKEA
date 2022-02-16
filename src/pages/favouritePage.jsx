import { useSelector } from 'react-redux';
import FavouriteCard from '../components/cards/favouriteCard';
import '../assets/scss/pages/_favourite.scss'

const FavouritePage = () => {
  const itemsCount = useSelector(
    state => state.favourits.totalAmountOfCartItems
  );
  const cartItems = useSelector(state => state.favourits.favourits);
  const totalOrderPrice = useSelector(state => state.favourits.totalPrice);

  return (
    <>
      <div className='fav-parent'>
        <div className='container'>
          <div className='center-fav-page'>
          <div class="fav-frow">
                <h3>Wish List</h3>
              </div>

              <div class="fav-srow">
                <h6></h6>
                <h6>Buy Online</h6>
                <h6 class="availbility">Available in-store?</h6>
                <h6></h6>
              </div>
              <hr />
            <h6>{itemsCount} items in Favourite Page</h6>
            <div className='shopping-total-price'>
              <h6>Total For This Order incl. VAT</h6>
              <h4>EGP {totalOrderPrice}</h4>
            </div>
          </div>
          <section className='row shopping-page'>
            <section className='col-12 left-shopping-page'>
              {cartItems.map(item => {
                return (
                  <FavouriteCard
                    id={item.id}
                    key={item.id}
                    product={item.productData}
                    purchasedQuantity={item.PurchasedAmount}
                  />
                );
              })}
            </section>

            <hr></hr>

            {/* <!-- Start Div for total price --> */}
              <div class="total-price">
                <div class="show-price">
                  <span>Subtotal</span>
                  <h6>EGP {totalOrderPrice} </h6>
                </div>
                </div>
            
          </section>
        </div>
      </div>
    </>
  );
};
export default FavouritePage;
