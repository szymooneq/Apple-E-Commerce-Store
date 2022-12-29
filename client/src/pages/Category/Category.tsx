import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import useFetch from '../../lib/hooks/useFetch';
import './Category.scss';

function Category(): JSX.Element {
	const { id } = useParams();
	const { data } = useFetch(
		`/api/products?populate=*&[filters][categories][id]=${id}`
	);

	return (
		<div className="category-main-content">
			<div className="layout">
				<div className="category-title">
					{
						data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
							?.title
					}
				</div>
				{data && <Products innerPage={true} products={data} />}
			</div>
		</div>
	);
}

export default Category;
