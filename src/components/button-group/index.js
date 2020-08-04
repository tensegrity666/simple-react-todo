import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGroup extends Component {
  onMarkImportant = () => {
    console.log('lalala')
  }

  render() {
    const { onDeleted } = this.props;

    return (
      <div className="btn-group" role="group" aria-label="delete or mark task">
        <button type="button" className="btn btn-danger" onClick={onDeleted}>
          <i className="fa fa-trash-o"/>
        </button>
        <button type="button" className="btn btn-success" onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation"/>
        </button>
      </div>
    );
  }
};

ButtonGroup.propTypes = {
  onDeleted: PropTypes.func,
};

ButtonGroup.defaultProps = {
  onDeleted: () => {},
};

export default ButtonGroup;
