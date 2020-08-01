import React from 'react';

import styles from './index.module.css';

const { clock } = styles;

const Clock = () => {
  return <span className={clock}>time</span>;
};

export default Clock;
