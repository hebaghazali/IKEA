import React from 'react';

const LanguageSelector = () => {
  return (
    <>
      <div class='language-selector d-flex align-items-center'>
        <div class='country-selector p-2'>
          <a href='#' class='country-btn d-flex align-items-center'>
            <i class='bi bi-globe'></i>
            <p class='px-2 m-0'>Change country</p>
          </a>
        </div>
        <div class='language-switch'>
          <select name='language-switch' id='language-switch' class='p-2'>
            <option value='en'>English</option>
            <option value='ar'>العربية</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
