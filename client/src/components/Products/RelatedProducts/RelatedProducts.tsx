import useFetch from '../../../lib/hooks/useFetch';
import Products from '../Products';
import './RelatedProducts.scss';

interface RelatedProducts {
	productId: any;
	categoryId: number;
}

function RelatedProducts({
	productId,
	categoryId
}: RelatedProducts): JSX.Element {
	const { data } = useFetch(
		`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
	);
	return (
		<div className="related-products">
			{data && <Products products={data} headingText="Related Products" />}
		</div>
	);
}

export default RelatedProducts;
