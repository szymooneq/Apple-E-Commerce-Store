import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState<number>(0);
	const [cartSubTotal, setCartSubTotal] = useState<number>(0);

	const handleAddToCart = (product: any, quantity: number) => {
		let items = [...cartItems];
		let index = items.findIndex((p) => p.id === product.id);

		if (index !== -1) {
			items[index].attributes.quantity += quantity;
		} else {
			product.attributes.quantity = quantity;
			items = [...items, product];
		}

		setCartItems(items);
	};

	const handleRemoveFromCart = (product: any) => {
		let items = [...cartItems];
		items.filter((p) => p.id !== product.id);
		setCartItems(items);
	};
	const handleCartProductQuantity = (type: any, product: any) => {
		let items = [...cartItems];
		let index = items.findIndex((p) => p.id === product.id);

		if (type === 'inc') {
			items[index].attributes.quantity += 1;
		} else if (type === 'dec') {
			if (items[index].attributes.quantity === 1) return;
			items[index].attributes.quantity -= 1;
		}

		setCartItems(items);
	};

	useEffect(() => {
		let count = 0;
		cartItems.map((item) => (count += item.attributes.quantity));
		setCartCount(count);

		let subTotal = 0;
		cartItems.map(
			(item) => (subTotal += item.attributes.price * item.attributes.quantity)
		);

		setCartSubTotal(subTotal);
	}, [cartItems]);

	return (
		<Context.Provider
			value={{
				categories,
				setCategories,
				products,
				setProducts,
				cartItems,
				setCartItems,
				cartCount,
				setCartCount,
				cartSubTotal,
				setCartSubTotal,
				handleAddToCart,
				handleRemoveFromCart,
				handleCartProductQuantity
			}}>
			{children}
		</Context.Provider>
	);
}

export default AppContext;
