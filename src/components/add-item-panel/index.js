import React from 'react';

import AddItemForm from '../add-item-form';
import Button from '../button';

import styles from './index.module.css';

const { addItem } = styles;

const AddItemPanel = () => {
  return (
    <div className={addItem}>
      <AddItemForm />
      <Button />
    </div>
  );
};

export default AddItemPanel;
