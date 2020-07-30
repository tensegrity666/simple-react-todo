import React from 'react';

import Header from '../header';
import TaskList from '../task-list';

const taskExamples = [
  {
    label: 'drink',
    important: true,
  },
  {
    label: 'eat',
    important: false,
  },
  {
    label: 'sleep',
    important: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <TaskList todos={taskExamples} />
    </div>
  );
};

export default App;
