import React from 'react';

const FilterButton = ({ noDrop, title, icon }) => {
  return (
    <button
      type='button'
      className='btn btn-light filter-btn'
      data-bs-toggle={noDrop?'':'dropdown'}
    >
      {title}
      {icon && <i className={icon}></i>}
    </button>
  );
};

export default FilterButton;
