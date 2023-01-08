import { useQuery } from '@tanstack/react-query';
import { getRelatedProducts } from '../../../lib/api/getData';
import Spinner from '../../Spinner/Spinner';
import Products from '../Products';
import './RelatedProducts.scss';

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
			{isLoading && <Spinner />}
			{data && <Products products={data} />}
		</div>
	);
}

export default RelatedProducts;
