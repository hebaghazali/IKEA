import React from 'react';

const FilterListItem = ({ id, label, listName, checkType,condition, clickHandler,chooseOption ,selectedOPtion}) => {
  return (
    <div
      className='dropdown-item d-flex flex-row align-items-center justify-content-between'
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
          value={id}
          checked={selectedOPtion===id}
          onChange={() => chooseOption(condition?{id,condition}:id)}
        />

      </div>
    </div>
  );
};

export default FilterListItem;
