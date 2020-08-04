/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/state-in-constructor */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { item, importantItem, completedItem, defaultItem } from './index.module.css';

import ButtonGroup from '../button-group';

class TaskListItem extends Component {
  state = {
    important: false,
    done: false,
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      }
    });
  }

  render() {
    const { label, onDeleted } = this.props;
    const { important, done } = this.state;

    return (
      <div className={item}>
        <span
        className={done ? completedItem : important ? importantItem : defaultItem}
          onClick={this.onLabelClick} onKeyPress={this.onLabelClick} role="listitem" tabIndex="0" >
          {label}
        </span>
        <ButtonGroup onDeleted={onDeleted}/>
      </div>
    );
  }
}

TaskListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func,
};

TaskListItem.defaultProps = {
  onDeleted: () => {},
};

export default TaskListItem;
