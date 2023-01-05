import { cartActionType, cartStateInterface } from '../interfaces/cart';

export const cartReducer = (
	cartState: cartStateInterface,
	action: cartActionType
) => {
	switch (action.type) {
		case 'addToCart': {
			const product = action.payload.product;
			const productPrice = product.attributes.price;
			const selectedVariant = action.payload.variant;

			const newCartItem = {
				...product,
				quantity: 1,
				variant: selectedVariant
			};

			const newCartItems = [...cartState.cartItems, newCartItem];
			const newCartCount = cartState.cartCount + 1;
			const newCartSubTotal = cartState.cartSubTotal + productPrice;

			return {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartSubTotal: newCartSubTotal
			};
		}

		case 'setCartItemQuantity': {
			const id = action.payload.id;
			const cartItem = action.payload.product;

			const updatedCartItem = {
				...cartItem,
				quantity: Number(action.payload.e.target.value)
			};

			const cartItems = [...cartState.cartItems];
			cartItems[id] = updatedCartItem;

			let newCartCount = 0;
			let newCartSubTotal = 0;

			cartItems.map((item) => {
				if (item.quantity) {
					newCartCount += item.quantity;
					newCartSubTotal += item.attributes.price * item.quantity;
				}
			});

			return {
				cartItems: cartItems,
				cartCount: newCartCount,
				cartSubTotal: newCartSubTotal
			};
		}

		case 'removeFromCart': {
			const id = action.payload.id;
			let cartItems = [...cartState.cartItems];
			cartItems.splice(id, 1);

			let newCartCount = 0;
			let newCartSubTotal = 0;

			cartItems.map((item) => {
				if (item.quantity) {
					newCartCount += item.quantity;
					newCartSubTotal += item.attributes.price * item.quantity;
				}
			});

			return {
				cartItems: cartItems,
				cartCount: newCartCount,
				cartSubTotal: newCartSubTotal
			};
		}

		default:
			return cartState;
	}
};
