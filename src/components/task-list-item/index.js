/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';

import { item, importantItem, completedItem, defaultItem, dateElement } from './index.module.css';

import ButtonGroup from '../button-group';

const TaskListItem = ({ label, printDate, onDeleted, onToggleImportant, onToggleDone, important, done }) => {
    return (
      <div className={item}>
        <span
          className={`${defaultItem} ${done ? completedItem : important ? importantItem : ''}`}
          role="listitem"
          tabIndex="0"
          onClick={onToggleDone}
          onKeyPress={onToggleDone}>
          {label}
        </span>
        <span className={dateElement}>{printDate}</span>
        <ButtonGroup
          onDeleted={onDeleted}
          onToggleImportant={onToggleImportant} />
      </div>
    );
}

TaskListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleDone: PropTypes.func,
  printDate: PropTypes.func,
  important: PropTypes.bool,
  done: PropTypes.bool,
};

TaskListItem.defaultProps = {
  onDeleted: () => {},
  onToggleImportant: () => {},
  onToggleDone: () => {},
  printDate: () => {},
  important: false,
  done: false,
};

export default TaskListItem;
