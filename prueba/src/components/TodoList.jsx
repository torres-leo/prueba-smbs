import React from 'react';

const TodoList = (props) => {
	return (
		<section>
			<ul className='mt-6 px-2'>{props.children}</ul>
		</section>
	);
};

export default TodoList;
