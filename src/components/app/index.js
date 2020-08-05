/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import Header from '../header';
import TaskList from '../task-list';
import FilterPanel from '../filter-panel';
import AddItemForm from '../add-item-form';

import taskExamples, { createTask } from './constants';

class App extends Component {
  state = {
    data: taskExamples,
  }

  addTask = (text) => {
    const newTask = createTask(text);

    this.setState(({ data }) => {
      const newData = [...data, newTask];

      return {
        data: newData,
      }
    });
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

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);

      const oldItem = data[index];
      const newItem = {
        ...oldItem,
        important: !oldItem.important,
      };

      const beforeIndex = data.slice(0, index);
      const afterIndex = data.slice(index + 1);

      const newData = [...beforeIndex, newItem, ...afterIndex];

      return {
        data: newData,
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((el) => el.id === id);

      const oldItem = data[index];
      const newItem = {
        ...oldItem,
        done: !oldItem.done,
      };

      const beforeIndex = data.slice(0, index);
      const afterIndex = data.slice(index + 1);

      const newData = [...beforeIndex, newItem, ...afterIndex];

      return {
        data: newData,
      }
    });
  }

  render() {
    const { data } = this.state;

    const doneTasks = data.filter((el) => el.done).length;
    const todoTasks = data.filter((el) => !el.done).length;

    return (
      <main className="container">
        <Header todoTasks={todoTasks} doneTasks={doneTasks} />
        <FilterPanel />
        <TaskList
          todos={data}
          onDeleted={this.deleteTask}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddItemForm onAdd={this.addTask} />
      </main>
    );
  }
};

export default App;
