import { loadStripe } from '@stripe/stripe-js';
import { useContext } from 'react';
import { BsCartX } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { makePaymentRequest } from '../../lib/api/api';
import { Context } from '../../lib/context/AppContext';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

interface Cart {
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ setShowCart }: Cart): JSX.Element {
	const { cartItems, cartSubTotal } = useContext(Context);

	const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

	const handlePayment = async () => {
		try {
			const stripe = await stripePromise;
			const res = await makePaymentRequest.post('/api/orders', {
				products: cartItems
			});

			await stripe?.redirectToCheckout({
				sessionId: res.data.stripeSession.id
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="cart-panel">
			<div className="opac-layer"></div>
			<div className="cart-content">
				<div className="cart-header">
					<span className="heading">Shopping Cart</span>
					<span className="close-btn" onClick={() => setShowCart(false)}>
						<MdClose />
						<span className="text">close</span>
					</span>
				</div>

				{!cartItems.length ? (
					<div className="empty-cart">
						<BsCartX />
						<span>No products in the cart.</span>
						<button className="return-cta">RETURN TO SHOP</button>
					</div>
				) : (
					<>
						<CartItem />
						<div className="cart-footer">
							<div className="subtotal">
								<span className="text">Subtotal:</span>
								<span className="text total">{cartSubTotal}$</span>
							</div>
							<div className="button">
								<button className="checkout-cta" onClick={handlePayment}>
									Checkout
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Cart;
