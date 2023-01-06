import { useParams } from 'react-router-dom';
import Products from '../../components/Products/Products';
import useFetch from '../../lib/hooks/useFetch';
import './Category.scss';

function Category(): JSX.Element {
	const { category } = useParams();
	const { data } = useFetch(
		`/api/products?populate=*&[filters][category][slug]=${category}`
	);

	if (!data) return null;

	const categoryName = data[0].attributes.category.data.attributes.name;

	return (
		<div className="category-main-content">
			<div className="layout">
				<Products products={data} header={`Shop ${categoryName}`} />
			</div>
		</div>
	);
}

export default Category;
