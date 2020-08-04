/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import Header from '../header';
import TaskList from '../task-list';
import FilterPanel from '../filter-panel';
import AddItemPanel from '../add-item-panel';

import taskExamples from './constants';

class App extends Component {
  state = {
    data: taskExamples,
  }

  deleteTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);

      const beforeIndex = data.slice(0, index);
      const afterIndex = data.slice(index + 1);

      const newData = [...beforeIndex, ...afterIndex];

      return {
        data: newData,
      }
    });
  }

  render() {
    const { data } = this.state;

    return (
      <main className="container">
        <Header />
        <FilterPanel />
        <TaskList todos={data} onDeleted={this.deleteTask} />
        <AddItemPanel />
      </main>
    );
  }
};

export default App;
