import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import Spinner from '../../components/Spinner/Spinner';
import { getProductList } from '../../lib/api/getData';
import './Category.scss';

function Category(): JSX.Element {
	const { category } = useParams();
	const { data, isLoading } = useQuery(['category', category], () =>
		getProductList(category)
	);

	return (
		<section className="category-page">
			<div className="layout">
				{isLoading && <Spinner />}
				{data && (
					<Products
						products={data.productList}
						header={`Shop ${data.productsCategory}`}
					/>
				)}
			</div>
		</section>
	);
}

export default Category;
