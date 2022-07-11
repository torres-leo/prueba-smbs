import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
	return ReactDOM.createPortal(
		<div className=''>
			<div className='bg-gray-500/60 min-h-screen w-full flex justify-center items-center absolute top-0  text-gray-200'>
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
