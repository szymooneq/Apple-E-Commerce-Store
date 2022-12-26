import prod from '../../../assets/products/earbuds-prod-1.webp';
import './ProductCard.scss';

function ProductCard(): JSX.Element {
	return (
		<div className="product-card">
			<div className="thumbnail">
				<img src={prod} alt="Earbuds thumbnail" />
			</div>
			<div className="produ-details">
				<div className="name">Product name</div>
				<div className="price">499$</div>
			</div>
		</div>
	);
}

export default ProductCard;
