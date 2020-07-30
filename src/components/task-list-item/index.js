import React from 'react';
import PropTypes from 'prop-types';

import { item } from './index.module.css';

import ButtonGroup from '../button-group';

const TaskListItem = ({ label }) => {
  return (
    <div className={item}>
      <span>{label}</span>
      <ButtonGroup />
    </div>
  );
};

TaskListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TaskListItem;
