import useFetch from '../../../lib/hooks/useFetch';
import Products from '../Products';
import './RelatedProducts.scss';

interface props {
	productId: any;
	categoryId: number;
}

function RelatedProducts({ productId, categoryId }: props): JSX.Element {
	const { data } = useFetch(
		`/api/products?populate=*&filters[slug][$ne]=${productId}&filters[category][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
	);

	if (!data) return null;

	return (
		<div className="related-products">
			<Products products={data} />
		</div>
	);
}

export default RelatedProducts;
