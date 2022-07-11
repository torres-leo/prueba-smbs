import React, { useState } from 'react';
import useTodoApp from '../hooks/useTodoApp';

const TodoSearch = () => {
	const { inputFindTask, setInputFindTask, setModal } = useTodoApp();
	const onClickButton = () => setModal(true);

	const onSearchValueChange = (e) => {
		setInputFindTask(e.target.value);
	};

	return (
		<div className='sm:flex sm:gap-2 sm:items-center w-3/4 mx-auto'>
			<input
				className='bg-gray-200 rounded-md flex-1 h-12 text-center text-gray-800 shadow-md placeholder-gray-400'
				placeholder='Busca una tarea'
				value={inputFindTask}
				onChange={onSearchValueChange}
			/>
			<button
				className='bg-indigo-500 hover:bg-indigo-600 shadow-lg rounded-md cursor-pointer text-md font-bold text-gray-200 w-2/3 p-2 mt-4 sm:mt-0 md:w-auto'
				onClick={onClickButton}>
				Agregar Tarea
			</button>
		</div>
	);
};

export default TodoSearch;
