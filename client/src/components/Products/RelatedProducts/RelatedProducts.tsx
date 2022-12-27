import Products from '../Products';
import './RelatedProducts.scss';

function RelatedProducts(): JSX.Element {
	return (
		<div className="related-products">
			<Products headingText="Related Products" />
		</div>
	);
}

export default RelatedProducts;
