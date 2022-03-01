import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import {
  getFirst4Categories,
  getProductCatById,
} from '../../services/firebase';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavbarSearch = () => {
  const navbarSearchContainer = useRef(null);
  const navbarSearch = useRef(null);
  const overlay = useRef(null);

  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);

  const overlayOn = () => {
    overlay.current.style.display = 'block';
    navbarSearchContainer.current.classList.add('focus');
    navbarSearch.current.classList.add('navbar-focus');
  };

  const overlayOff = () => {
    overlay.current.style.display = 'none';
    navbarSearchContainer.current.classList.remove('focus');
    navbarSearch.current.classList.remove('navbar-focus');
  };

  useEffect(() => {
    getFirst4Categories().then(cat => setCategories(cat));
  }, []);

  useEffect(() => {
    categories.map(categoryData => {
      getProductCatById(categoryData.data.ProductCategory[0]);
    });
  }, [categories]);

  return (
    <>
      <div className='navbar-search-container' ref={navbarSearchContainer}>
        <div className='navbar-search' ref={navbarSearch}>
          <div className='search-box'>
            <i className='bi bi-search'></i>
            <input
              type='text'
              placeholder={t('SearchPlaceHolder')} 
              onFocus={overlayOn}
            />
            <i className='bi bi-camera'></i>
          </div>
        </div>

        <ul className='list'>
          {categories.map(categoryData => {
            return (
              <li key={categories.indexOf(categoryData)} onClick={overlayOff}>
                <Link
                  to={{
                    pathname: `/category/products/${categoryData.id}`,
                    type: 'products',
                    name: categoryData.data.ProductCategory[0], //category name
                    id: categoryData.data.ProductCategory, //category Id
                    subCatName: categoryData.data.Name,
                    subCatId: categoryData.id,
                    subObj: categoryData.data,
                  }}
                >
                  <i className='fas fa-list'></i>
                  <span>{categoryData.data.Name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay */}
      <div ref={overlay} onClick={overlayOff} className='overlay-bg'></div>
    </>
  );
};

export default NavbarSearch;
