import { useContext } from 'react';
import TodoAppContext from '../context/TodoAppProvider';

const useTodoApp = () => {
	return useContext(TodoAppContext);
};

export default useTodoApp;
