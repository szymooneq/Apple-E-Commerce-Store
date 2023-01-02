import { useContext, useState } from 'react';
import { BsBagCheck, BsTruck } from 'react-icons/bs';
import {
	FaCartPlus,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaPinterest,
	FaTwitter
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import RelatedProducts from '../../components/Products/RelatedProducts/RelatedProducts';
import { Context } from '../../lib/context/AppContext';
import useFetch from '../../lib/hooks/useFetch';
import './Product.scss';

function Product(): JSX.Element {
	const [quantity, setQuantity] = useState(1);
	const { id } = useParams();
	const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
	const { handleAddToCart } = useContext(Context);

	const decrement = () => {
		setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
	};

	const increment = () => {
		setQuantity((prev) => prev + 1);
	};

	if (!data) return;
	const product = data.data[0].attributes;

	return (
		<div className="single-product-main-content">
			<div className="layout">
				<div className="single-product-page">
					<div className="left">
						<div className="new">New</div>
						<div className="name">{product.title}</div>
						<div className="price">${product.price}</div>
						{/* <div className="desc">{product.description}</div> */}

						<fieldset className="variant">
							<legend>Color - Deep Purple</legend>
							<div className="variant-list">
								<div className="variant-item">
									<input type="radio" id="purple" name="color" value="purple" />
									<label className="variant-label" htmlFor="purple">
										<span></span>
									</label>
								</div>
								<div className="variant-item">
									<input type="radio" id="black" name="color" value="black" />
									<label className="variant-label" htmlFor="black">
										<span></span>
									</label>
								</div>
								<div className="variant-item">
									<input type="radio" id="silver" name="color" value="silver" />
									<label className="variant-label" htmlFor="silver">
										<span></span>
									</label>
								</div>
								<div className="variant-item">
									<input type="radio" id="gold" name="color" value="gold" />
									<label className="variant-label" htmlFor="gold">
										<span></span>
									</label>
								</div>
							</div>
						</fieldset>

						<div className="delivery">
							<div className="delivery-item">
								<BsTruck />
								<div className="delivery-info">
									<ul>
										Delivery
										<li>In Stock</li>
										<li>Free Shipping</li>
										<li className="link">Get delivery dates</li>
									</ul>
								</div>
							</div>
							<div className="delivery-item">
								<BsBagCheck />
								<div className="delivery-info">
									<ul>
										Pickup
										<li className="link">Check availability</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="checkout-button">
							{/* <div className="quantity-buttons">
								<span onClick={decrement}>-</span>
								<span>{quantity}</span>
								<span onClick={increment}>+</span>
							</div> */}
							<button
								className="add-to-cart-button"
								onClick={() => {
									handleAddToCart(data.data[0], quantity);
									setQuantity(1);
								}}>
								{/* <FaCartPlus size={20} /> */}
								Add to Bag
							</button>
						</div>

						{/* <span className="divider" /> */}

						{/* <div className="info-item">
							<span className="text-bold">
								Category:
								<span> {product.categories.data[0].attributes.title}</span>
							</span>
							<span className="text-bold">
								Share:
								<span className="social-icons">
									<FaFacebookF size={16} />
									<FaTwitter size={16} />
									<FaInstagram size={16} />
									<FaLinkedinIn size={16} />
									<FaPinterest size={16} />
								</span>
							</span>
						</div> */}
					</div>
					<div className="right">
						<img
							src={
								import.meta.env.VITE_STRIPE_APP_DEV_URL +
								product.image.data[0].attributes.url
							}
							alt={product.image.data[0].attributes.alternativeText}
						/>
					</div>
				</div>
				{/* <RelatedProducts
					productId={id}
					categoryId={product.categories.data[0].id}
				/> */}
			</div>
		</div>
	);
}

export default Product;
