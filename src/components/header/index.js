import React from 'react';

import { header } from './index.module.css';

import Clock from '../clock';

const Header = () => {
  return (
    <header className={header}>
      <h1>ToDoLiSt</h1>
      <Clock />
    </header>
  );
};

export default Header;
