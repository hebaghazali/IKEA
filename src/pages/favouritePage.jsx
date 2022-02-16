import { useSelector } from 'react-redux';
import FavouriteCard from '../components/cards/favouriteCard';
import '../assets/scss/pages/_favourite.scss'

const FavouritePage = () => {

  const cartItems = useSelector(state => state.favourits.favourits);

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
            <h6>No items in Favourite Page</h6>
            <div className='shopping-total-price'>
              <h6>Go to product and click on heart icon to save product in this page</h6>
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
          </section>
        </div>
      </div>
    </>
  );
};
export default FavouritePage;
