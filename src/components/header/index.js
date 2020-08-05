import React from 'react';

import { header } from './index.module.css';

import Clock from '../clock';

const Header = () => {
  return (
    <header className={header}>
      <h1>ToDoLiSt</h1>
      <Clock />
      <p>1 more to do, 3 done</p>
    </header>
  );
};

export default Header;
