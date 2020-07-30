import React from 'react';

import './index.css';

const ButtonGroup = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
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
