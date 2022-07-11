import React, { useState } from 'react';
import useTodoApp from '../hooks/useTodoApp';

const TodoForm = () => {
	const { modal, setModal, addTodo } = useTodoApp();
	const [newTask, setNewTask] = useState('');
	const [errorTask, setErrorTask] = useState(false);

	const handleCancelTask = (e) => {
		e.preventDefault();
		setModal(!modal);
	};

	const handleWriteTask = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmitTask = (e) => {
		e.preventDefault();
		if (newTask === '') {
			setErrorTask('No puedes agregar tareas vacias');
		} else {
			addTodo(newTask);
		}
		setModal(!modal);
	};

	return (
		<form
			onSubmit={handleSubmitTask}
			className='w-full h-80 lg:w-1/2 bg-gray-200 p-4 flex items-center flex-col rounded-md'>
			<label htmlFor='tarea' className='text-center font-bold text-gray-700 mb-2 uppercase'>
				Agrega una tarea a tu lista
			</label>
			<textarea
				className='bg-gray-300 border-2 rounded-sm shadow-lg text-black text-center p-3 h-56 w-2/3 resize-none placeholder-gray-400'
				name='tarea'
				id='tarea'
				placeholder='Agrega una tarea que desees tener en lista'
				value={newTask}
				onChange={handleWriteTask}
			/>
			<div className='mt-5 flex justify-around items-center w-full'>
				<button
					type='button'
					onClick={handleCancelTask}
					className='cursor-pointer inline-block text-gray-200 font-medium w-1/3 p-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors'>
					Cancelar
				</button>
				<button
					type='submit'
					className='cursor-pointer inline-block text-gray-800 font-medium w-1/3 p-2 rounded-md bg-green-500 hover:bg-green-600 transition-colors'>
					Agregar
				</button>
			</div>
		</form>
	);
};

export default TodoForm;
