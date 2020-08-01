/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import TaskListItem from '../task-list-item';

const TaskList = ({ todos }) => {
  const items = todos.map((item) => {
    return (
      <li className="list-group-item">
        <TaskListItem label={item.label} important={item.important} />
      </li>
    );
  });

  return <ul className="list-group">{items}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TaskList;
