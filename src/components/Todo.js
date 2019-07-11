import React from 'react';

import '../styles/Todo.css';

const Todo = ({ id, originalText, todoText, handleRemove }) => (
    <li
    	onClick={() => handleRemove(id)}
		data-text={originalText}>
		{todoText}
    </li>
)
export default Todo;