import React from 'react';

import Header from '../header';
import TaskList from '../task-list';

import taskExamples from './constants';
import FilterPanel from '../filter-panel';
import AddItemPanel from '../add-item-panel';

const App = () => {
  return (
    <div className="container">
      <Header />
      <FilterPanel />
      <TaskList todos={taskExamples} />
      <AddItemPanel />
    </div>
  );
};

export default App;
