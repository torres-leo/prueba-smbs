import React from 'react';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';
import Spinner from './components/Spinner';
import useTodoApp from './hooks/useTodoApp';

function AppTodoList() {
	const { error, loading, searchedTodos, completeTodo, deleteTodo, modal, setModal } = useTodoApp();
	const id = new Date().getMilliseconds();

	return (
		<div className='w-full md:w-2/3 mx-auto mt-14 p-4 bg-transparent rounded-lg shadow-2xl shadow-black/60'>
			<h2 className='text-3xl font-bold text-center text-gray-100 tracking-wider underline underline-offset-8'>
				TO-DO List
			</h2>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <p>Ha ocurrido un error ..</p>}
				{loading && <Spinner />}
				{!loading && !searchedTodos.length && (
					<p className='mt-10 text-center text-lg font-bold leading-3 text-gray-200 mb-6'>
						Aun no has agregado tareas. Agrega una para visualizarlas acá.
					</p>
				)}
				{searchedTodos.map((item) => (
					<TodoItem
						key={item.text}
						text={item.text}
						completed={item.completed}
						onComplete={() => completeTodo(item.text)}
						onDelete={() => deleteTodo(item.text)}
					/>
				))}
			</TodoList>

			{!!modal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</div>
	);
}

export default AppTodoList;
