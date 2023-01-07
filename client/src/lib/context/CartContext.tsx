import { createContext, useReducer } from 'react';
import { CartContextInterface } from '../interfaces/cart';
import { Product, ProductVariant } from '../interfaces/product';
import { cartReducer } from './cartReducer';

const INITIAL_STATE = {
	cartItems: [],
	cartCount: 0,
	cartSubTotal: 0
};

export const CartContext = createContext({} as CartContextInterface);

interface props {
	children: React.ReactNode;
}

function AppContext({ children }: props) {
	const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);

	const addToCart = (product: Product, variant: ProductVariant) => {
		dispatch({ type: 'addToCart', payload: { product, variant } });
	};

	const setCartItemQuantity = (
		e: React.ChangeEvent<HTMLSelectElement>,
		product: Product,
		id: number
	) => {
		dispatch({ type: 'setCartItemQuantity', payload: { e, product, id } });
	};

	const removeFromCart = (id: number) => {
		dispatch({ type: 'removeFromCart', payload: { id } });
	};

	return (
		<CartContext.Provider
			value={{
				cartState,
				addToCart,
				setCartItemQuantity,
				removeFromCart
			}}>
			{children}
		</CartContext.Provider>
	);
}

export default AppContext;
