import React from 'react';
import FilterListItem from './filterListItem';

const FilterDropList = (props) => {
  let items = [
    {
      label: 'Newest',
      id: 'newest-radio',
    },
    {
      label: 'Price: low to high',
      id: 'lowToHigh-radio',
    },
    {
      label: 'Price: high to low',
      id: 'highToLowRadio',
    },
    {
      label: 'Name',
      id: 'name-radio',
    },
  ];
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
