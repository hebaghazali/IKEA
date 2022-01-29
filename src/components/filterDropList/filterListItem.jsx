import React from 'react';

const FilterListItem = ({ id, label, listName, checkType }) => {
  return (
    <div
      className='dropdown-item d-flex flex-row align-items-center justify-content-between'
      onClick={() => console.log(id)}
    >
      <label className='form-check-label' htmlFor={id}>
        {label}
      </label>
      <div className='form-check'>
        <input
          className='form-check-input'
          type={checkType}
          name={listName}
          id={id}
        />
      </div>
    </div>
  );
};

export default FilterListItem;
