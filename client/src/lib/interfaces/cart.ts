import { Product, ProductVariant } from './product';

export interface cartStateInterface {
	cartItems: Product[] | [];
	cartCount: number;
	cartSubTotal: number;
}

export type cartActionType =
	| {
			type: 'addToCart';
			payload: { product: Product; variant: ProductVariant };
	  }
	| {
			type: 'setCartItemQuantity';
			payload: {
				e: React.ChangeEvent<HTMLSelectElement>;
				product: Product;
				id: number;
			};
	  }
	| {
			type: 'removeFromCart';
			payload: { id: number };
	  };

export interface CartContextInterface {
	cartState: cartStateInterface;
	addToCart: (product: Product, variant: ProductVariant) => void;
	setCartItemQuantity: (
		e: React.ChangeEvent<HTMLSelectElement>,
		product: Product,
		id: number
	) => void;
	removeFromCart: (id: number) => void;
}
