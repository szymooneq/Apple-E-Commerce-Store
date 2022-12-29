import { createContext, useState } from 'react';

interface ContextInterface {
	categories: any;
	setCategories: any;
	products: any;
	setProducts: any;
}

export const Context = createContext<ContextInterface>({
	categories: [],
	setCategories: () => {},
	products: [],
	setProducts: () => {}
});

interface AppContextInterface {
	children: React.ReactNode;
}

function AppContext({ children }: AppContextInterface) {
	const [categories, setCategories] = useState();
	const [products, setProducts] = useState();

	return (
		<Context.Provider
			value={{ categories, setCategories, products, setProducts }}>
			{children}
		</Context.Provider>
	);
}

export default AppContext;
