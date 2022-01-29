import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavbarIcons = () => {
  const { cartProducts,favourits } = useSelector((state) => state);

  return (
    <>
      <div className='navbar-icons'>
        <NavLink to='/login'>
          <i className='bi bi-person'></i>
        </NavLink>
        <NavLink to='/favorite'>
          <i className='bi bi-heart'>{favourits.favourits.length}</i>
        </NavLink>
        <NavLink to='/shopping-bag'>
          <i className='bi bi-minecart-loaded'>{cartProducts.cartProducts.length}</i>
          
        </NavLink>
      </div>
    </>
  );
};

export default NavbarIcons;
