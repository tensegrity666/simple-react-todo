/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

import TaskListItem from '../task-list-item';

const TaskList = ({ todos, onDeleted }) => {
  const items = todos.map((item) => {
    const { id, label } = item;

    return (
      <li key={id} className="list-group-item">
        <TaskListItem
          label={label}
          onDeleted={()=> onDeleted(id)} />
      </li>
    );
  });

  return (
    <>
      <h3 className="visually-hidden">tasks</h3>
      <ul className="list-group">{items}</ul>
    </>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleted: PropTypes.func,
};

TaskList.defaultProps = {
  onDeleted: () => {},
};

export default TaskList;
