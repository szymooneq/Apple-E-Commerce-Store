import { useContext, useState } from 'react';
import {
	FaCartPlus,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaPinterest,
	FaTwitter
} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
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
						<img
							src={
								import.meta.env.VITE_STRIPE_APP_DEV_URL +
								product.image.data[0].attributes.url
							}
							alt={product.image.data[0].attributes.alternativeText}
						/>
					</div>
					<div className="right">
						<span className="name">{product.title}</span>
						<span className="price">{product.price}</span>
						<span className="desc">{product.description}</span>

						<div className="cart-buttons">
							<div className="quantity-buttons">
								<span onClick={decrement}>-</span>
								<span>{quantity}</span>
								<span onClick={increment}>+</span>
							</div>
							<button
								className="add-to-cart-button"
								onClick={() => {
									handleAddToCart(data.data[0], quantity);
									setQuantity(1);
								}}>
								<FaCartPlus size={20} />
								ADD TO CART
							</button>
						</div>

						<span className="divider" />

						<div className="info-item">
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
						</div>
					</div>
				</div>
				<RelatedProducts
					productId={id}
					categoryId={product.categories.data[0].id}
				/>
			</div>
		</div>
	);
}

export default Product;
