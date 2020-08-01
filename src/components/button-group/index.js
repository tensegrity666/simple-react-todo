import React from 'react';

const ButtonGroup = () => {
  return (
    <div className="btn-group" role="group" aria-label="delete or mark task">
      <button type="button" className="btn btn-danger">
        OK
      </button>
      <button type="button" className="btn btn-success">
        NOPE
      </button>
    </div>
  );
};

export default ButtonGroup;
