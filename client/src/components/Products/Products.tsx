import ProductCard from './ProductCard/ProductCard';
import './Products.scss';

interface Products {
	innerPage?: boolean;
	headingText: string;
}

function Products({ innerPage, headingText }: Products): JSX.Element {
	return (
		<div className="products-container">
			{!innerPage && <div className="sec-heading">{headingText}</div>}
			<div className="products">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
}

export default Products;
