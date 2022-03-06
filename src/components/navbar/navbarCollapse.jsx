import React from 'react';
import { useTranslation } from 'react-i18next';

const NavbarCollapse = () => {
  const { t } = useTranslation();

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
              {t('Products')}
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              {t('Rooms')}
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              {t('Offers')}
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              {t('WhatNew')}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarCollapse;
