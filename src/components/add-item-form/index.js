/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const { addItemForm, addItemLabel, button, addItem } = styles;

class AddItemForm extends Component {
  state = {
    label: '',
  };

  onFormChange = (event) => {
    this.setState({
      label: event.target.value.trimLeft(),
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const { onAdd } = this.props;
    const { label } = this.state;

    if (label && label !== ' ') {
      onAdd(label);

      this.setState({
        label: '',
      });
    }
  };

  render() {
    const { label } = this.state;

    return (
      <form className={addItem} onSubmit={this.onFormSubmit}>
        <label htmlFor="addItem" className={addItemLabel}>
          <span className="visually-hidden">add item</span>
          <input
            className={`form-control form-control-lg ${addItemForm}`}
            id="addItem"
            type="text"
            onChange={this.onFormChange}
            placeholder="what do we do?"
            value={label}
          />
        </label>

        <button type="submit" className={`btn btn-primary btn-lg ${button}`}>
          Add new
        </button>
      </form>
    );
  }
}

AddItemForm.propTypes = {
  onAdd: PropTypes.func,
};

AddItemForm.defaultProps = {
  onAdd: () => {},
};

export default AddItemForm;
