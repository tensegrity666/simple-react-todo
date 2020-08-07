import React from 'react';
import PropTypes from 'prop-types';

import TaskListItem from '../task-list-item';

const TaskList = ({ todos }) => {
  const items = todos.map((item) => {
    const { id, label, printDate, important, done } = item;

    return (
      <li key={id} className="list-group-item">
        <TaskListItem
          label={label}
          printDate={printDate}
          important={important}
          done={done}
          id={id}
        />
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
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
