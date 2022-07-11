import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [todoItem, setTodoItem] = useState(initialValue);

	useEffect(() => {
		setTimeout(() => {
			try {
				setLoading(!!loading);
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				// Verificar si no existen datos en la lista para inicializar el arreglo y guardarlos en el LS
				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					// En caso que si existan datos, los tomaremos desde el localstorage
					parsedItem = JSON.parse(localStorageItem);
				}

				setTodoItem(parsedItem);
				setLoading(!loading);
			} catch (error) {
				setError(error);
			}
		}, 1000);
	}, []);

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);
			setTodoItem(newItem);
		} catch (error) {
			setError(error);
		}
	};

	return { todoItem, saveItem, loading, error };
}

export default useLocalStorage;
