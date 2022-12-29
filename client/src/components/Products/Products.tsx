import { ProductApi } from '../../lib/interfaces/interfaces';
import ProductCard from './ProductCard/ProductCard';
import './Products.scss';

interface Products {
	innerPage?: boolean;
	headingText?: string;
	products: ProductApi;
}

function Products({ innerPage, headingText, products }: Products): JSX.Element {
	return (
		<div className="products-container">
			{!innerPage && <div className="sec-heading">{headingText}</div>}
			<div className="products">
				{products?.data?.map((item) => (
					<ProductCard key={item.id} id={item.id} data={item.attributes} />
				))}
			</div>
		</div>
	);
}

export default Products;
