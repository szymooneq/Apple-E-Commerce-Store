import { createContext, useReducer } from 'react';
import { CartContextInterface } from '../interfaces/cart';
import { product, productVariant } from '../interfaces/product';
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

	const addToCart = (product: product, variant: productVariant) => {
		dispatch({ type: 'addToCart', payload: { product, variant } });
	};

	const setCartItemQuantity = (
		e: React.ChangeEvent<HTMLSelectElement>,
		product: product,
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
