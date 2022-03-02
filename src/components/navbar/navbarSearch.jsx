import React, { useRef, useEffect, useState } from 'react';
import { getDocumentByID, getFirst4Categories } from '../../services/firebase';
import { Link, useHistory } from 'react-router-dom';

import Cookies from 'universal-cookie';

const NavbarSearch = () => {
  const history = useHistory();
  const cookies = new Cookies();

  const navbarSearchContainer = useRef(null);
  const navbarSearch = useRef(null);
  const inputRef = useRef(null);
  const overlay = useRef(null);

  const [categories, setCategories] = useState([]);

  const [productCatId, setProductCatId] = useState('');
  const [productCatName, setProductCatName] = useState('');

  const [input, setInput] = useState('');
  const [finalInput, setFinalInput] = useState();

  const recommendedSearch = ['mirror', 'desk', 'table', 'chair']; // should be guessed by AI
  const [searchHistory, setSearchHistory] = useState([]);

  const changeHandler = e => {
    setInput(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    handleSearch(input);
  };

  const handleSearch = searchInput => {
    setFinalInput(searchInput);
    setInput('');
    overlayOff();
    inputRef.current.blur();
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    cookies.remove('search_history');
  };

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

    cookies.get('search_history') &&
      setSearchHistory(cookies.get('search_history'));
  }, []);

  useEffect(() => {
    productCatId &&
      getDocumentByID('ProductCategories', productCatId).then(data =>
        setProductCatName(data.Name)
      );
  }, [productCatId]);

  useEffect(() => {
    if (finalInput) {
      history.push(`/productsSearch/${finalInput}`);

      if (searchHistory.length === 6)
        setSearchHistory(searchHistory.splice(searchHistory.length - 1, 1));

      const newSearchHistory = [finalInput];
      searchHistory.forEach(element => {
        if (!newSearchHistory.includes(element)) newSearchHistory.push(element);
      });
      setSearchHistory(newSearchHistory);
    }
  }, [finalInput]);

  useEffect(() => {
    cookies.set('search_history', searchHistory);
    console.log(cookies.get('search_history'));
  }, [searchHistory]);

  return (
    <>
      <div className='navbar-search-container' ref={navbarSearchContainer}>
        <div className='navbar-search' ref={navbarSearch}>
          <form onSubmit={submitHandler}>
            <div className='search-box'>
              <i className='bi bi-search'></i>
              <input
                type='text'
                placeholder='What are you looking for?'
                onFocus={overlayOn}
                onChange={changeHandler}
                value={input}
                ref={inputRef}
              />
              <i className='bi bi-camera'></i>
            </div>
          </form>
        </div>

        {searchHistory.length !== 0 ? (
          <>
            <ul className='list'>
              <p>Your search history</p>{' '}
              <button onClick={clearSearchHistory}>Clear</button>
              {searchHistory.map(el => (
                <li key={searchHistory.indexOf(el)}>
                  <div>
                    <i className='fas fa-search'></i>
                    <span>{el}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className='list'>
            {recommendedSearch.map(element => {
              return (
                <li
                  key={recommendedSearch.indexOf(element)}
                  onClick={() => handleSearch(element)}
                >
                  <div>
                    <i className='fas fa-search'></i>
                    <span>{element}</span>
                  </div>
                </li>
              );
            })}
            {categories.map(categoryData => {
              !productCatId &&
                setProductCatId(categoryData.data.ProductCategory[0]);
              return (
                <li key={categories.indexOf(categoryData)} onClick={overlayOff}>
                  <Link
                    to={`/category/product/${productCatName}/${productCatId}/${categoryData.data.Name}/${categoryData.id}`}
                  >
                    <i className='fas fa-list'></i>
                    <span>{categoryData.data.Name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Overlay */}
      <div ref={overlay} onClick={overlayOff} className='overlay-bg'></div>
    </>
  );
};

export default NavbarSearch;
