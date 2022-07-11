import Header from './components/Header';
import Formulario from './components/Formulario';
import AppTodoList from './AppTodoList';
import { TodoAppProvider } from './context/TodoAppProvider';

function App() {
	return (
		<div className='container mx-auto mt-6'>
			<Header />
			<div className='lg:flex lg:items-start lg:gap-1 mt-10'>
				<Formulario />
				<TodoAppProvider>
					<AppTodoList />
				</TodoAppProvider>
			</div>
		</div>
	);
}

export default App;
