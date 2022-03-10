import React, { useEffect } from 'react';
import NavbarCollapse from './navbarCollapse';
import NavbarSearch from './navbarSearch';
import LocationContainer from './locationContainer';
import NavbarIcons from './navbarIcons';
import NavbarToggler from './navbarToggler';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartItemsFromUser,
  getProductDataById,
  getFavItemsFromUser,
} from '../../services/firebase';
import { addToCart } from '../../store/actions/cartProducts';
import { addToFav } from '../../store/actions/favourits';

const Navbar = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cartProducts.cartProducts);
  const favItems = useSelector(state => state.favourits.favourits);

  useEffect(() => {
    // Handle Add toCart
    localStorage.getItem('UID') &&
      getCartItemsFromUser(localStorage.getItem('UID')).then(productIDs => {
        // console.log(productIDs);

        productIDs &&
          productIDs.forEach(productID => {
            getProductDataById(productID).then(productData => {
              // if there are cart items that already exist in store don't dispatch again and just skip it
              if (!cartItems.some(item => item.id === productID))
                // use this condition if the navbar will be rendered again, but as long as it is never rendered again this condition won't be needed
                dispatch(
                  addToCart({ id: productID, productData, PurchasedAmount: 1 })
                );
            });
          });
      });

    // Handle Add to Favourite
    localStorage.getItem('UID') &&
      getFavItemsFromUser(localStorage.getItem('UID')).then(productIDs => {
        // console.log(productIDs);

        productIDs &&
          productIDs.forEach(productID => {
            getProductDataById(productID).then(productData => {
              // if there are cart items that already exist in store don't dispatch again and just skip it
              if (!favItems.some(item => item.id === productID))
                // use this condition if the navbar will be rendered again, but as long as it is never rendered again this condition won't be needed
                dispatch(addToFav({ id: productID, productData }));
            });
          });
      });
  }, []);

  return (
    <>
      <div className='navbar navbar-expand-xl pt-4 navbar-light'>
        <NavLink to='/home' className='navbar-brand'>
          <img className='logo' src='./images/ikea-logo.svg' alt='logo' />
        </NavLink>

        <NavbarCollapse />

        <NavbarSearch />

        <LocationContainer />

        <NavbarIcons />

        <NavbarToggler />
      </div>
    </>
  );
};

export default Navbar;
