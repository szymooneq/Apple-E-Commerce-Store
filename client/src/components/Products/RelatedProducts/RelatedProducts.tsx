import { useQuery } from '@tanstack/react-query';
import { getRelatedProducts } from '../../../lib/api/getData';
import Products from '../Products';

interface props {
	productSlug: string;
	categoryId: number;
}

function RelatedProducts({ productSlug, categoryId }: props): JSX.Element {
	const { data, isLoading } = useQuery(['relatedProducts', productSlug], () =>
		getRelatedProducts(productSlug, categoryId)
	);

	return (
		<div className="related-products">
			{isLoading && <div>Loading...</div>}
			{data && <Products products={data} />}
		</div>
	);
}

export default RelatedProducts;
