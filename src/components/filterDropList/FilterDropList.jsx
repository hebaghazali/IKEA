import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../store/actions/productsList';
import FilterListItem from './filterListItem';

const FilterDropList = (props) => {
  const {listName}=props;

  let {filters,filteredList} = useSelector((state) => state.products);
  const dispatsh=useDispatch();

  const [selectedOPtion, setSelectedOp] = useState('');

    const chooseOption = async (newValue) => {
    let updateFilters = {};

    setSelectedOp(newValue?.id ? newValue.id : newValue);
    if (listName === 'Sort') {
      updateFilters = { ...filters, Sort: newValue.condition };
    } else if (listName === 'Price') {
      updateFilters = { ...filters, Price: ['Price' , '<=' , parseInt(newValue)]};
    }else{
      updateFilters = { ...filters, [listName]: [listName, '==', newValue] };
    }

    dispatsh(await updateFilter(updateFilters));
  };

  useEffect(()=>{
    !filteredList && setSelectedOp('');
  },[filters])

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
          condition={item.condition}
          selectedOPtion={selectedOPtion}
          chooseOption={chooseOption}
          {...props}
        />
      ))}
    </ul>
  );
};

export default FilterDropList;
