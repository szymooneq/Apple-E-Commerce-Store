import { product } from '../../lib/interfaces/product';
import ProductCard from './ProductCard/ProductCard';
import './Products.scss';

interface props {
	header?: string;
	products: product[];
}

function Products({ header, products }: props): JSX.Element {
	return (
		<div className="products-container">
			{header && (
				<>
					<h1 className="products-header">{header}</h1>
					<div className="products-info">
						<h2>All models.</h2>
						<span>Take your pick.</span>
					</div>
				</>
			)}

			<div className="products">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Products;
