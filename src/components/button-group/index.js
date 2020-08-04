/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGroup extends Component {
  render() {
    const { onDeleted, onMarkImportant } = this.props;

    return (
      <div className="btn-group" role="group" aria-label="delete or mark task">
        <button type="button" className="btn btn-danger" onClick={onDeleted}>
          <span className="visually-hidden">delete task</span>
          <i className="fa fa-trash-o"/>
        </button>
        <button type="button" className="btn btn-success" onClick={onMarkImportant}>
          <span className="visually-hidden">mark as important</span>
          <i className="fa fa-exclamation"/>
        </button>
      </div>
    );
  }
};

ButtonGroup.propTypes = {
  onDeleted: PropTypes.func,
  onMarkImportant: PropTypes.func,
};

ButtonGroup.defaultProps = {
  onDeleted: () => {},
  onMarkImportant: () => {},
};

export default ButtonGroup;
