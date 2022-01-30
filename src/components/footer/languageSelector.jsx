import React from 'react';

const LanguageSelector = () => {
  return (
    <>
      <div className='language-selector d-flex align-items-center'>
        <div className='country-selector p-2'>
          <a href='#' className='country-btn d-flex align-items-center'>
            <i className='bi bi-globe'></i>
            <p className='px-2 m-0'>Change country</p>
          </a>
        </div>
        <div className='language-switch'>
          <select name='language-switch' id='language-switch' className='p-2'>
            <option value='en'>English</option>
            <option value='ar'>العربية</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
