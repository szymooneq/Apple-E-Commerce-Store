import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../lib/context/AppContext';
import './CartItems.scss';

function CartItems(): JSX.Element {
	const { cartItems, handleRemoveFromCart, handleUpdateQuantity } =
		useContext(Context);

	return (
		<div className="cart-products">
			{cartItems.map((item, id) => (
				<div key={id} className="cart-product">
					<div className="img-container">
						<img
							src={import.meta.env.VITE_STRIPE_APP_DEV_URL + item.image.url}
							alt={item.image.alternativeText}
						/>
					</div>
					<div className="prod-details">
						<h2 className="name">
							<Link to="/">
								{item.title} ({item.color})
							</Link>
						</h2>

						<div className="prod-price">
							<select
								name="quantity"
								id="quantity"
								onChange={(e: Event) => handleUpdateQuantity(e, item, id)}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							<div className="highlight">{item.price * item.quantity}$</div>
						</div>
						<div className="remove" onClick={() => handleRemoveFromCart(id)}>
							Remove
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CartItems;
