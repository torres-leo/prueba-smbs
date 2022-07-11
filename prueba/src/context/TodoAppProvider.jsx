import { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TodoAppContext = createContext();

const TodoAppProvider = ({ children }) => {
	const { todoItem: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

	const [inputFindTask, setInputFindTask] = useState('');
	const [modal, setModal] = useState(false);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	// Filtrando los todos para la busqueda
	let searchedTodos = [];

	if (!inputFindTask.length >= 1) {
		searchedTodos = todos;
	} else {
		// Buscando en la lista de to-dos
		searchedTodos = todos.filter((todo) => {
			// convirtiendo todos los datos a minuscula a la hora de buscar
			const todoText = todo.text.toLowerCase();
			const searchText = inputFindTask.toLowerCase();

			return todoText.includes(searchText);
		});
	}

	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({ completed: false, text });
		saveTodos(newTodos);
	};

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);

		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex((todo) => todo.text === text);

		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<TodoAppContext.Provider
			value={{
				loading,
				error,
				totalTodos,
				completedTodos,
				inputFindTask,
				setInputFindTask,
				searchedTodos,
				addTodo,
				completeTodo,
				deleteTodo,
				modal,
				setModal,
			}}>
			{children}
		</TodoAppContext.Provider>
	);
};

export { TodoAppProvider };
export default TodoAppContext;
