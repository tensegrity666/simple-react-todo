import React from 'react';

import SearchForm from '../search-form';
import FilterButtonGroup from '../filter-button-group';

import styles from './index.module.css';

const { filterPanel } = styles;

const FilterPanel = () => {
  return (
    <div className={filterPanel}>
      <SearchForm />
      <FilterButtonGroup />
    </div>
  );
};

export default FilterPanel;
