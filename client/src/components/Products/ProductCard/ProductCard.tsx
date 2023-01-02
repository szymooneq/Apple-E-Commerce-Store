import { Link } from 'react-router-dom';
import { ProductData } from '../../../lib/interfaces/interfaces';
import './ProductCard.scss';

interface ProductCard {
	id: number;
	data: ProductData;
}

function ProductCard({ id, data }: ProductCard): JSX.Element {
	return (
		<Link to={`/product/${id}`} className="product-card">
			<div className="thumbnail">
				<img
					src={
						import.meta.env.VITE_STRIPE_APP_DEV_URL +
						data.image.data[0].attributes.url
					}
					alt={data.image.data[0].attributes.alternativeText}
				/>
			</div>
			<div className="prod-details">
				<div className="new">New</div>
				<div className="name">{data.title}</div>
				<div className="price">${data.price}</div>
			</div>
		</Link>
	);
}

export default ProductCard;
