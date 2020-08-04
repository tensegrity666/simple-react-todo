import React from 'react';

import styles from './index.module.css';

const { addItemForm, addItemLabel } = styles;

const AddItemForm = () => {
  return (
    <form className={addItemForm}>
      <label htmlFor="addItem" className={addItemLabel}>
        <input className="form-control form-control-lg" id="addItem" type="text" placeholder="what do we do?" />
      </label>
    </form>
  );
};

export default AddItemForm;