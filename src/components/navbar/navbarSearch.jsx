import React from 'react';

const NavbarSearch = () => {
  return (
    <>
      <div className='navbar-search'>
        <div className='search-box'>
          <i className='bi bi-search'></i>
          <input type='text' placeholder='What are you looking for?' />
          <i className='bi bi-camera'></i>
        </div>
      </div>
    </>
  );
};

export default NavbarSearch;
