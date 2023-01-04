import { createContext, useEffect, useState } from 'react';
import { cartState } from '../interfaces/interfaces';

const INITIAL_STATE = {
	cartItems: [],
	cartCount: 0,
	cartSubTotal: 0
};

type cartAction =
	| { type: 'addTodo'; payload: Todo }
	| { type: 'toggleTodo'; payload: { id: string } };

const appReducer = (state: cartState, action) => {
	switch (action.type) {
		default:
			return;
	}
};

export const Context = createContext({});

interface AppContextInterface {
	children: React.ReactNode;
}

function AppContext({ children }: AppContextInterface) {
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState<number>(0);
	const [cartSubTotal, setCartSubTotal] = useState<number>(0);

	const handleAddToCart = (product: any, variant: any) => {
		const newProduct = {
			id: product.id,
			title: product.attributes.title,
			slug: product.attributes.slug,
			price: product.attributes.price,
			createdAt: product.attributes.createdAt,
			publishedAt: product.attributes.publishedAt,
			updatedAt: product.attributes.updatedAt,
			isNew: product.attributes.isNew,
			colorCode: variant.value,
			image: variant.image.data.attributes,
			color: variant.displayName,
			quantity: 1
		};

		setCartItems((prev) => [...prev, newProduct]);
	};

	const handleUpdateQuantity = (e: Event, product: any, id: number) => {
		const updatedProduct = { ...product, quantity: Number(e.target.value) };
		let updatedCartItems = [...cartItems];
		updatedCartItems[id] = updatedProduct;

		setCartItems(updatedCartItems);
	};

	const handleRemoveFromCart = (id: number) => {
		let items = [...cartItems];
		items.splice(id, 1);

		setCartItems(items);
	};

	useEffect(() => {
		let count = 0;
		cartItems.map((item) => (count += item.quantity));
		setCartCount(count);

		console.log(cartItems);

		let subTotal = 0;
		cartItems.map((item) => (subTotal += item.price * item.quantity));

		setCartSubTotal(subTotal);
	}, [cartItems]);

	return (
		<Context.Provider
			value={{
				cartItems,
				setCartItems,
				cartCount,
				setCartCount,
				cartSubTotal,
				setCartSubTotal,
				handleAddToCart,
				handleRemoveFromCart,
				handleUpdateQuantity
			}}>
			{children}
		</Context.Provider>
	);
}

export default AppContext;
