import { ProductApi } from '../../lib/interfaces/interfaces';
import ProductCard from './ProductCard/ProductCard';
import './Products.scss';

interface Products {
	headingText?: string;
	products: ProductApi;
}

function Products({ headingText, products }: Products): JSX.Element {
	return (
		<div className="products-container">
			<h1 className="products-header">{headingText}</h1>
			<div className="products-info">
				<h2>All models.</h2>
				<span>Take your pick.</span>
			</div>
			<div className="products">
				{products?.data?.map((item) => (
					<ProductCard key={item.id} id={item.id} data={item.attributes} />
				))}
			</div>
		</div>
	);
}

export default Products;
