import ProductCard from './ProductCard/ProductCard';
import './Products.scss';

interface Products {
	innerPage?: boolean;
}

function Products({ innerPage }: Products): JSX.Element {
	return (
		<div className="products-container">
			{!innerPage && <div className="sec-heading">Section Heading</div>}
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
