import React from 'react';
import PropTypes from 'prop-types';

import { header } from './index.module.css';

import Clock from '../clock';

const Header = ({ todoTasks, doneTasks }) => {
  return (
    <header className={header}>
      <h1 className={1}>ToDoLiSt</h1>
      <Clock className={2} />
      <p className={3}>{todoTasks} more to do, {doneTasks} done</p>
    </header>
  );
};

Header.propTypes = {
  todoTasks: PropTypes.number.isRequired,
  doneTasks: PropTypes.number.isRequired,
};


export default Header;
