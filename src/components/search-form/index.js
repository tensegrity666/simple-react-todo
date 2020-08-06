/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const { searchForm, searchFormLabel, buttonsGroup, buttons } = styles;

class SearchForm extends Component {
  state = {
    searchItem: '',
  }

  onSearchChange = (event) => {
    const { onSearchChange } = this.props;
    const searchItem = event.target.value;

    this.setState({ searchItem });
    onSearchChange(searchItem);
  }

  render() {
    const { searchItem } = this.state;

    return (
      <form className={searchForm}>
        <label htmlFor="searchForm" className={searchFormLabel}>
          <span className="visually-hidden">search</span>
          <input
            className="form-control form-control-lg"
            id="searchForm"
            type="text"
            placeholder="search..."
            onChange={this.onSearchChange}
            value={searchItem} />
        </label>

        <div className={`btn-group btn-group-lg ${buttonsGroup}`} role="group" aria-label="filter tasks">
          <button type="button" className={`btn btn-primary btn-lg ${buttons}`}>
            All
          </button>
          <button type="button" className={`btn btn-success btn-lg ${buttons}`}>
            Important
          </button>
          <button type="button" className={`btn btn-secondary btn-lg ${buttons}`}>
            Done
          </button>
        </div>
      </form>
    );
  }
};

SearchForm.propTypes = {
  onSearchChange: PropTypes.func,
}

SearchForm.defaultProps = {
  onSearchChange: () => {},
}

export default SearchForm;
