import { product, productVariant } from './product';

export interface cartStateInterface {
	cartItems: product[] | [];
	cartCount: number;
	cartSubTotal: number;
}

export type cartActionType =
	| {
			type: 'addToCart';
			payload: { product: product; variant: productVariant };
	  }
	| {
			type: 'setCartItemQuantity';
			payload: {
				e: React.ChangeEvent<HTMLSelectElement>;
				product: product;
				id: number;
			};
	  }
	| {
			type: 'removeFromCart';
			payload: { id: number };
	  };

export interface CartContextInterface {
	cartState: cartStateInterface;
	addToCart: (product: product, variant: productVariant) => void;
	setCartItemQuantity: (
		e: React.ChangeEvent<HTMLSelectElement>,
		product: product,
		id: number
	) => void;
	removeFromCart: (id: number) => void;
}
