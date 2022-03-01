import React from 'react';
import { useTranslation } from 'react-i18next';

const NavbarSearch = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='navbar-search'>
        <div className='search-box'>
          <i className='bi bi-search'></i>
          <input type='text' placeholder={t('SearchPlaceHolder')} />
          <i className='bi bi-camera'></i>
        </div>
      </div>
    </>
  );
};

export default NavbarSearch;
