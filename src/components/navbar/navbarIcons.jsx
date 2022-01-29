import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavbarIcons = () => {
  const { cartProducts, favourits } = useSelector(state => state);

  return (
    <>
      <div className='navbar-icons'>
        <NavLink to='/login'>
          <i className='bi bi-person'></i>
        </NavLink>
        <NavLink to='/favorite' style={{ position: 'relative' }}>
          <i className='bi bi-heart'></i>
          <span className='badge-yellow'>{favourits.favourits.length}</span>
        </NavLink>
        <NavLink to='/shopping-bag' style={{ position: 'relative' }}>
          <i className='bi bi-minecart-loaded'></i>
          <span className='badge-yellow'>
            {cartProducts.cartProducts.length}
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default NavbarIcons;
