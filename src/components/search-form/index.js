import React from 'react';

import styles from './index.module.css';

const { searchForm, searchFormLabel } = styles;

const SearchForm = () => {
  return (
    <form className={searchForm}>
      <label htmlFor="search" className={searchFormLabel}>
        <input className="form-control form-control-lg" id="search" type="text" placeholder="sdfsfsdf" />
      </label>
    </form>
  );
};

export default SearchForm;
