import CircularProgress from '@mui/material/CircularProgress';
import { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import requestPayment from '../../lib/api/requestPayment';
import { CartContext } from '../../lib/context/CartContext';
import './Cart.scss';
import CartItems from './CartItems/CartItems';

interface props {
	showCart: boolean;
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ showCart, setShowCart }: props): JSX.Element {
	const [loading, setLoading] = useState<boolean>(false);
	const { cartState } = useContext(CartContext);

	const handleLoading = (loading: boolean) => {
		setLoading(loading);
	};

	return (
		<>
			<div
				className="opac-layer"
				data-cart-open={showCart}
				onClick={() => setShowCart(false)}></div>
			<section className="cart" data-cart-open={showCart}>
				<div className="cart-content">
					<header className="cart-header">
						<h1>Shopping bag.</h1>
						<div className="close-btn" onClick={() => setShowCart(false)}>
							<MdClose />
						</div>
					</header>

					{!cartState.cartItems.length ? (
						<div className="cart-empty">
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
									<button
										onClick={() => requestPayment(cartState, handleLoading)}
										disabled={loading}>
										{loading && <CircularProgress />}
										Checkout
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			</section>
		</>
	);
}

export default Cart;
