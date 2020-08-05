import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const { addItemForm, addItemLabel, button, addItem } = styles;

const AddItemForm = ({ onAdd }) => {
  return (
    <form className={addItem}>
      <label htmlFor="addItem" className={addItemLabel}>
        <input className={`form-control form-control-lg ${addItemForm}`} id="addItem" type="text" placeholder="what do we do?" />
      </label>
      <button type="button" className={`btn btn-primary ${button}`} onClick={() => onAdd('text')} >
      Add new ToDo
      </button>
    </form>
  );
};

AddItemForm.propTypes = {
  onAdd: PropTypes.func,
}

AddItemForm.defaultProps = {
  onAdd: () => {},
}

export default AddItemForm;