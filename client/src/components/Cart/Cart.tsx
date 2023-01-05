import { loadStripe } from '@stripe/stripe-js';
import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { makePaymentRequest } from '../../lib/api/api';
import { CartContext } from '../../lib/context/CartContext';
import './Cart.scss';
import CartItems from './CartItems/CartItems';

interface props {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ showCart, setShowCart }: props): JSX.Element {
	const { cartState } = useContext(CartContext);

	const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

	const handlePayment = async () => {
		try {
			const stripe = await stripePromise;
			const res = await makePaymentRequest.post('/api/orders', {
				products: cartState.cartItems
			});

			await stripe?.redirectToCheckout({
				sessionId: res.data.stripeSession.id
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="cart-panel" data-open={showCart}>
			<div className="cart-content">
				<div className="cart-header">
					<h1>Shopping bag.</h1>
					<div className="close-btn" onClick={() => setShowCart(false)}>
						<MdClose />
					</div>
				</div>

				{!cartState.cartItems.length ? (
					<div className="empty-cart">
						<p>Your Bag is empty.</p>
					</div>
				) : (
					<>
						<CartItems />
						<div className="cart-footer">
							<div className="subtotal">
								<div className="subtotal-item">
									<div>Subtotal</div>
									<div>${cartState.cartSubTotal}</div>
								</div>
								<div className="subtotal-item">
									<div>Shipping</div>
									<div>FREE</div>
								</div>
							</div>

							<div className="total">
								<div>Total:</div>
								<div>${cartState.cartSubTotal}</div>
							</div>
							<div className="checkout-button">
								<button onClick={handlePayment}>Checkout</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Cart;
