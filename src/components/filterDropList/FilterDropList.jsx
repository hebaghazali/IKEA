import React from 'react';
import FilterListItem from './filterListItem';

const FilterDropList = (props) => {
  return (
    <ul
      className='dropdown-menu my-2'
      style={{ width: '250px' }}
      aria-labelledby='dropdownMenu'
    >
      {props.items.map((item, index) => (
        <FilterListItem
          key={index}
          label={item.label}
          id={item.id}
          {...props}
        />
      ))}
    </ul>
  );
};

export default FilterDropList;
