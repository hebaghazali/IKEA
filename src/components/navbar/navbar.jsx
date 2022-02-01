import React from 'react';
import NavbarCollapse from './navbarCollapse';
import NavbarSearch from './navbarSearch';
import LocationContainer from './locationContainer';
import NavbarIcons from './navbarIcons';
import NavbarToggler from './navbarToggler';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
