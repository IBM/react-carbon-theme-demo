import React from 'react'
import './CustomComponent.scss'

function CustomComponent({ onClick, children }) {
  return (
    <div className="customComponent">
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default CustomComponent