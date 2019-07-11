import React from 'react'
import emojify from '../utils/emojify';
import Todo from './Todo';

import '../styles/TodoList.css';

const TodoList = ({ todos, handleRemove }) => {
    return(
        <ul>
	        {todos.map((todo, index) =>
	        	<Todo
	        		key={index}
	        		id={index}
	            	originalText={todo}
	            	todoText={emojify(todo)}
	            	handleRemove={handleRemove}
	        	/>
	        )}
        </ul>
    )   
}

export default TodoList;