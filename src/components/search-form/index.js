/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import buttonsData from './constants';
import styles from './index.module.css';

const { searchForm, searchFormLabel, buttonsGroup, buttons } = styles;

class SearchForm extends Component {
  state = {
    searchItem: '',
  };

  onSearchChange = (event) => {
    const { onSearchChange } = this.props;

    const searchItem = event.target.value;

    this.setState({ searchItem });
    onSearchChange(searchItem);
  };

  render() {
    const { searchItem } = this.state;
    const { filter, onFilterChange } = this.props;

    const newButtons = buttonsData.map(({ name, label, id }) => {
      const isActive = name === filter;
      const buttonClassName = isActive
        ? 'btn-primary'
        : 'btn-outline-secondary';

      return (
        <button
          key={id}
          type="button"
          className={`btn btn-lg ${buttonClassName} ${buttons}`}
          onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });

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
            value={searchItem}
          />
        </label>

        <div
          className={`btn-group btn-group-lg ${buttonsGroup}`}
          role="group"
          aria-label="filter tasks">
          {newButtons}
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearchChange: PropTypes.func,
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

SearchForm.defaultProps = {
  onSearchChange: () => {},
  onFilterChange: () => {},
  filter: '',
};

export default SearchForm;
