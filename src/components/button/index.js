import React from 'react';

import styles from './index.module.css';

const { button } = styles;

const Button = () => {
  return (
    <button type="button" className={`btn btn-primary ${button}`}>
      Add new ToDo
    </button>
  );
};

export default Button;
