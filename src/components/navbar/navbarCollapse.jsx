import React from 'react';

const NavbarCollapse = () => {
  return (
    <>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <p
              className='nav-link active'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              Products
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              Rooms
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              Offers
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              What's new
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarCollapse;
