import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
const TodoList = ({ todos, remove, onToggle }) => {
	return (
		<div className="TodoList">
			{todos.map(todo => (
				<TodoListItem todo={todo} key={todo.todoid} remove={remove} onToggle={onToggle} />
			))}
		</div>
	);
};

export default TodoList;
