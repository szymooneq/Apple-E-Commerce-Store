import { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { Context } from '../../../lib/context/AppContext';
import './CartItem.scss';

function CartItem(): JSX.Element {
	const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
		useContext(Context);

	return (
		<div className="cart-products">
			{cartItems.map((item) => (
				<div key={item.id} className="cart-product">
					<div className="img-container">
						<img
							src={
								import.meta.env.VITE_STRIPE_APP_DEV_URL +
								item.attributes.image.data[0].attributes.url
							}
							alt={item.attributes.image.data[0].attributes.alternativeText}
						/>
					</div>
					<div className="prod-details">
						<span className="name">{item.attributes.title}</span>
						<MdClose
							className="close-btn"
							onClick={() => handleRemoveFromCart(item)}
						/>
						<div className="quantity-buttons">
							<span onClick={() => handleCartProductQuantity('dec', item)}>
								-
							</span>
							<span>{item.attributes.quantity}</span>
							<span onClick={() => handleCartProductQuantity('inc', item)}>
								+
							</span>
						</div>
						<div className="text">
							<span>{item.attributes.quantity}</span>
							<span>x</span>
							<span className="highlight">
								{item.attributes.price * item.attributes.quantity}$
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CartItem;
