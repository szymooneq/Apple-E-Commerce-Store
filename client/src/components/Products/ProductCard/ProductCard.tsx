import { Link } from 'react-router-dom';
import { Product } from '../../../lib/interfaces/product';
import './ProductCard.scss';

interface props {
	product: Product;
}

function ProductCard({ product }: props): JSX.Element {
	const imgSrc = product.attributes.image.data[0].attributes.url;
	const imgAlt = product.attributes.image.data[0].attributes.alternativeText;

	return (
		<Link to={`/product/${product.attributes.slug}`} className="product-card">
			<div className="thumbnail">
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className="prod-details">
				{product.attributes.isNew && <div className="new">New</div>}
				<div className="name">{product.attributes.title}</div>
				<div className="price">${product.attributes.price}</div>
			</div>
		</Link>
	);
}

export default ProductCard;
