import React from 'react';

import '../styles/TodoForm.css';

const TodoForm = ({ inputValue, handleChange, handleKeyPress, handleClick, removeAllFromState }) => (
    <div className="form">
      <input 
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>
        add
      </button>
      <button onClick={removeAllFromState}>
        Remove All
      </button>
    </div>

);

export default TodoForm;