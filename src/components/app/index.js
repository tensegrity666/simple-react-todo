import React from 'react';

import Header from '../header';
import TaskList from '../task-list';
import FilterPanel from '../filter-panel';
import AddItemPanel from '../add-item-panel';

import taskExamples from './constants';

const App = () => {
  return (
    <main className="container">
      <Header />
      <FilterPanel />
      <TaskList todos={taskExamples} onDeleted={(id) => console.log(id)} />
      <AddItemPanel />
    </main>
  );
};

export default App;
