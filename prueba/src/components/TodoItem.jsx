import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props) => {
	return (
		<li className='bg-gray-200 relative flex justify-start gap-4 items-center mt-2 shadow-md w-5/6 mx-auto h-12'>
			<span
				className={`cursor-pointer w-10 font-bold absolute left-2 hover:text-green-600 transition-colors ${
					props.completed && 'text-green-500'
				}`}
				onClick={props.onComplete}>
				√
			</span>
			<p className={`leading-4 ml-10 font-medium ${props.completed && 'line-through'}`}>{props.text}</p>
			<span
				className='cursor-pointer flex justify-center items-center h-6 w-6 font-bold absolute -top-2 right-0 hover:text-red-500'
				onClick={props.onDelete}>
				<FontAwesomeIcon icon={faCircleXmark} className='text-2xl' />
			</span>
		</li>
	);
};

export default TodoItem;
