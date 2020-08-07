/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-nested-ternary */

import React from 'react';
import PropTypes from 'prop-types';

import {
  item,
  importantItemStyle,
  completedItemStyle,
  defaultItemStyle,
  dateElement,
} from './index.module.css';

import ButtonGroup from '../button-group';

const TaskListContext = React.createContext();

const TaskListItem = ({ label, printDate, important, done, id }) => {
  return (
    <TaskListContext.Consumer>
      {({ onToggleImportant, onToggleDone, onDeleted }) => {
        return (
          <div className={item}>
            <span
              className={`${defaultItemStyle} ${
                done ? completedItemStyle : important ? importantItemStyle : ''
              }`}
              role="listitem"
              tabIndex="0"
              onClick={() => onToggleDone(id)}
              onKeyPress={() => onToggleDone(id)}>
              {label}
            </span>
            <span className={dateElement}>{printDate}</span>
            <ButtonGroup
              onDeleted={() => onDeleted(id)}
              onToggleImportant={() => onToggleImportant(id)}
            />
          </div>
        );
      }}
    </TaskListContext.Consumer>
  );
};

TaskListItem.propTypes = {
  label: PropTypes.string.isRequired,
  printDate: PropTypes.string,
  important: PropTypes.bool,
  done: PropTypes.bool,
  id: PropTypes.string,
};

TaskListItem.defaultProps = {
  printDate: '',
  important: false,
  done: false,
  id: '',
};

export { TaskListItem as default, TaskListContext };
