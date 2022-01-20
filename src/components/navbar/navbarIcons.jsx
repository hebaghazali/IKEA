import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarIcons = () => {
  return (
    <>
      <div className='navbar-icons'>
        <NavLink to='/login'>
          <i className='bi bi-person'></i>
        </NavLink>
        <NavLink to='/favorite'>
          <i className='bi bi-heart'></i>
        </NavLink>
        <NavLink to='/shopping-bag'>
          <i className='bi bi-minecart-loaded'></i>
        </NavLink>
      </div>
    </>
  );
};

export default NavbarIcons;
