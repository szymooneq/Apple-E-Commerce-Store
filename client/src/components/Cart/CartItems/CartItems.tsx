import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../lib/context/CartContext';
import './CartItems.scss';

function CartItems(): JSX.Element {
	const { cartState, setCartItemQuantity, removeFromCart } =
		useContext(CartContext);

	return (
		<div className="cart-products">
			{cartState.cartItems.map((cartItem, id) => {
				let itemPrice;

				const url = import.meta.env.VITE_STRIPE_APP_DEV_URL;
				const imgSrc = cartItem.variant?.image.data.attributes.url;
				const imgAlt = cartItem.variant?.image.data.attributes.alternativeText;

				if (cartItem.quantity) {
					itemPrice = cartItem.attributes.price * cartItem.quantity;
				}

				return (
					<div key={id} className="cart-product">
						<div className="img-container">
							<img src={url + imgSrc} alt={imgAlt} />
						</div>
						<div className="prod-details">
							<h2 className="name">
								<Link to={`/product/${cartItem.attributes.slug}`}>
									{cartItem.attributes.title} ({cartItem.variant?.displayName})
								</Link>
							</h2>

							<div className="prod-quantity">
								<select
									name="quantity"
									id="quantity"
									onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
										setCartItemQuantity(e, cartItem, id)
									}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
								</select>
								<div>${itemPrice}</div>
							</div>
							<div className="remove" onClick={() => removeFromCart(id)}>
								Remove
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CartItems;
