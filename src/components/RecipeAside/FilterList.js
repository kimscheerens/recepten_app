import React from 'react';
import FilterListItem from './FilterListItem';

const FilterList = ({ FilterList }) => (
  <div className='list-wrap'>
    {FilterList.map((item) => (
      <FilterListItem key={item.id} item={item} />
    ))}
  </div>
);

export default FilterList;