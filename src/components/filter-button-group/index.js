import React from 'react';

import styles from './index.module.css';

const { buttons } = styles;

const FilterButtonGroup = () => {
  return (
    <div className="btn-group btn-group-md" role="group" aria-label="delete or mark task">
      <button type="button" className={`btn btn-primary ${buttons}`}>
        OK
      </button>
      <button type="button" className={`btn btn-success ${buttons}`}>
        NOPE
      </button>
      <button type="button" className={`btn btn-secondary ${buttons}`}>
        MAYBE
      </button>
    </div>
  );
};

export default FilterButtonGroup;
