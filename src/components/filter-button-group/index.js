/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

import styles from './index.module.css';

const { buttons } = styles;

class FilterButtonGroup extends Component {
  render() {
    return (
      <div className="btn-group btn-group-md" role="group" aria-label="delete or mark task">
        <button type="button" className={`btn btn-primary ${buttons}`}>
          All
        </button>
        <button type="button" className={`btn btn-success ${buttons}`}>
          Important
        </button>
        <button type="button" className={`btn btn-secondary ${buttons}`}>
          Done
        </button>
      </div>
    );
  }
};

export default FilterButtonGroup;
