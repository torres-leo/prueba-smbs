import React from 'react';
import useTodoApp from '../hooks/useTodoApp';

const TodoCounter = () => {
	const { totalTodos, completedTodos } = useTodoApp();

	return (
		<h2 className='text-md text-center mt-8 mb-4 font-bold uppercase tracking-wider'>
			{totalTodos ? `Has completado "${completedTodos}" de "${totalTodos}" Tareas` : '¡Agrega tu primer Tarea!'}
		</h2>
	);
};

export default TodoCounter;
