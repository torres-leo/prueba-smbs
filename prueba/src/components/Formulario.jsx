import React, { useState } from 'react';

const Formulario = () => {
	const [inputValues, setInputValues] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
		comment: '',
	});

	const [mensaje, setMensaje] = useState(false);
	const [error, setError] = useState(false);
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);
	const [errorComment, setErrorComment] = useState(false);

	const regexEmail = /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i;
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,15}/;

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([errorName, errorEmail, errorPassword, errorComment].includes(true)) {
			setError(true);
			const formulario = document.querySelector('.formulario');
			formulario.classList.add('border-2', 'border-red-500');

			setTimeout(() => {
				setError(false);
				formulario.classList.remove('border-2', 'border-red-500');
			}, 5000);
			return;
		}

		validationName();
		validationEmail();
		validationPassword();
		validationComment();

		setMensaje(true);
		setTimeout(() => {
			setMensaje(false);
		}, 5000);
	};

	const validationName = () => {
		if (inputValues.name === '') {
			setErrorName(true);
			return;
		}

		setErrorName(false);
	};

	const validationEmail = () => {
		if (!regexEmail.test(inputValues.email)) {
			setErrorEmail(true);
			return;
		}
		setErrorEmail(false);
	};

	const validationPassword = () => {
		if (!regexPassword.test(inputValues.password)) {
			setErrorPassword(true);
			return;
		}
		setErrorPassword(false);
	};

	const validationComment = () => {
		if (inputValues.comment.length > 50) {
			setErrorComment(true);
			return;
		}
		setErrorComment(false);
	};

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		const newValues = {
			...inputValues,
			[name]: value,
		};

		setInputValues(newValues);
	};

	return (
		<div className='md:w-2/3 lg:w-2/6 p-4 mx-auto'>
			<h2 className='text-xl text-center uppercase tracking-wide font-bold'>Validación de Formulario.</h2>

			<form className='bg-gray-300 p-4 shadow-xl mt-4 rounded-md formulario' onSubmit={handleSubmit}>
				<p className='text-md text-center'>Ingresa los datos necesarios para el Formulario</p>
				<small className='block text-center mb-4'>
					Los campos con el simbolo <span className='text-red-500'>(*)</span> son requeridos.
				</small>

				<div>
					<label htmlFor='name' className='text-black flex items-center gap-1 font-bold'>
						Nombre <span className='text-xs font-normal text-red-500'>(*)</span>
					</label>
					<input
						id='name'
						type='text'
						placeholder='Ingresa tu nombre'
						name='name'
						className='w-full border- rounded-md p-1 mt-1 placeholder-gray-400'
						value={inputValues.name}
						onChange={handleChange}
						onBlur={validationName}
						required
					/>
					{errorName && <small className='text-red-500 mb-0 ml-2'>Debes ingresar tu nombre</small>}
				</div>

				<div className='mt-2'>
					<label htmlFor='lastName' className='text-black block font-bold'>
						Apellido
					</label>
					<input
						id='lastName'
						type='text'
						name='lastName'
						placeholder='Ingresa tu apellido'
						className='w-full border- rounded-md p-1 mt-1 placeholder-gray-400'
						value={inputValues.lastName}
						onChange={handleChange}
					/>
				</div>

				<div className='mt-2'>
					<label htmlFor='email' className='text-black flex items-center gap-1 font-bold'>
						Email <span className='text-xs font-normal text-red-500'>(*)</span>
					</label>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='ejemplo@ejemplo.com'
						className='w-full border- rounded-md p-1 mt-1 placeholder-gray-400'
						value={inputValues.email}
						onChange={handleChange}
						onBlur={validationEmail}
						required
					/>
					{errorEmail && <small className='text-red-500 mb-0 ml-2 '>Debes colocar un email válido</small>}
				</div>

				<div className='mt-2'>
					<label htmlFor='password' className='text-black flex items-center gap-1 font-bold'>
						Contraseña <span className='text-xs font-normal text-red-500'>(*)</span>
					</label>
					<input
						id='password'
						type='password'
						name='password'
						placeholder='Ingresa tu contraseña'
						className='w-full border- rounded-md p-1 mt-1 placeholder-gray-400'
						value={inputValues.password}
						onChange={handleChange}
						onBlur={validationPassword}
						required
					/>
					{errorPassword && (
						<p className='text-red-500 mb-0 mx-2 text-xs mt-2'>
							La contraseña debe contener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.
						</p>
					)}
				</div>

				<div className='mt-4 mb-1'>
					<div className='flex items-center justify-between'>
						<label htmlFor='comment' className='text-black font-bold flex items-center gap-1'>
							Comentario <span className='text-xs font-normal text-red-500'>(*)</span>
						</label>
						<p className='mr-4 text-gray-400'>{inputValues.comment.length}</p>
					</div>
					<textarea
						id='comment'
						type='text'
						name='comment'
						placeholder='Agrega un comentario'
						className='w-full border rounded-md p-1 mt-1 placeholder-gray-400'
						value={inputValues.comment}
						onChange={handleChange}
						onBlur={validationComment}
						required
					/>
					{errorComment && (
						<small className='text-red-500 mb-0 ml-2'>Tu comentario no debe exceder de 50 caracteres</small>
					)}
				</div>
				<button
					type='submit'
					className='p-2 bg-blue-500 rounded-lg w-full my-2 font-bold uppercase text-white tracking-wide hover:bg-blue-600 transition-colors'>
					Enviar
				</button>

				<p className='text-center my-2'>
					{error && (
						<span className='text-sm bg-red-700 p-2 rounded-md text-white flex items-center justify-center gap-1'>
							Verifica que todos los campos sean correctos{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-alert-triangle'
								width='26'
								height='26'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#ffffff'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M12 9v2m0 4v.01' />
								<path d='M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75' />
							</svg>
						</span>
					)}

					{mensaje && (
						<span className='flex items-center justify-center text-green-600'>
							Datos enviados correctamente!{' '}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-check'
								width='26'
								height='26'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='#7bc62d'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path stroke='none' d='M0 0h24v24H0z' fill='none' />
								<path d='M5 12l5 5l10 -10' />
							</svg>
						</span>
					)}
				</p>
			</form>
		</div>
	);
};

export default Formulario;
