import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import useFetch from '../../lib/hooks/useFetch';
import './Category.scss';

function Category(): JSX.Element {
	const { categoryName } = useParams();
	const { data } = useFetch(
		`/api/products?populate=*&[filters][category][slug]=${categoryName}`
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
				{data && <Products products={data} header="Shop iPhone" />}
			</div>
		</div>
	);
}

export default Category;
