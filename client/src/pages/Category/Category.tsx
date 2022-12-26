import Products from '../../components/Products/Products';
import './Category.scss';

function Category(): JSX.Element {
	return (
		<div className="category-main-content">
			<div className="layout">
				<div className="category-title">Category Title</div>
				<Products innerPage={true} />
			</div>
		</div>
	);
}

export default Category;
