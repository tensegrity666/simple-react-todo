/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';

import Header from '../header';
import TaskList from '../task-list';
import SearchForm from '../search-form';
import AddItemForm from '../add-item-form';
import { TaskListContext } from '../task-list-item';

import taskExamples, { createTask } from './constants';

class App extends Component {
  _initialState = {
    data: taskExamples,
    searchItem: '',
    filter: 'all',
  }

  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem('currentState')) || this._initialState;
  }

  componentDidMount() {
    this.saveToLocalStorage();
  }

  // componentWillUnmount() {
  //   localStorage.currentState = JSON.stringify(this.state);
  // }

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
      return {
        data: this.toggleProperty(data, id, 'important'),
      }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'done'),
      }
    });
  }

  onSearchChange = (searchItem) => {
    this.setState({ searchItem });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    const oldItem = arr[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    const beforeIndex = arr.slice(0, index);
    const afterIndex = arr.slice(index + 1);

    const newData = [...beforeIndex, newItem, ...afterIndex];

    return newData;
  }

  search(items, serchingItem) {
    if (!serchingItem || serchingItem.length === 0) {
      return items;
    }

    return items.filter((item) => item.label
      .toLowerCase()
      .indexOf(serchingItem.trimLeft().toLowerCase()) > -1);
  }

  filter(items, filter) {
    switch(filter) {
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      case 'all':
        return items;
      default:
        return items;
    }
  }

  saveToLocalStorage() {
    window.addEventListener('unload', () => {
      localStorage.setItem('currentState', JSON.stringify(this.state));
    });
  }

  render() {
    const { data, searchItem, filter } = this.state;

    const doneTasks = data.filter((el) => el.done).length;
    const todoTasks = data.filter((el) => !el.done).length;

    const visible = (this.search(data, searchItem));
    const filtered = this.filter(visible, filter);

    return (
      <main className="container">
        <Header todoTasks={todoTasks} doneTasks={doneTasks} />
        <SearchForm
          filter={filter}
          onSearchChange={this.onSearchChange}
          onFilterChange={this.onFilterChange} />
        <TaskListContext.Provider value={{
          onToggleImportant: this.onToggleImportant,
          onDeleted: this.deleteTask,
          onToggleDone: this.onToggleDone,
          }}>
          <TaskList todos={filtered} />
        </TaskListContext.Provider>
        <AddItemForm onAdd={this.addTask} />
      </main>
    );
  }
};

export default App;
