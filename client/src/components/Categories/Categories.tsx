import { Link } from 'react-router-dom';
import { CategoriesApi } from '../../lib/interfaces/interfaces';
import './Categories.scss';

interface Categories {
	categories: CategoriesApi;
}

function Categories({ categories }: Categories): JSX.Element {
	return (
		<div className="shop-by-category">
			<div className="categories">
				{categories?.data?.map((item) => (
					<Link to={`/category/${item.id}`} key={item.id} className="category">
						<img
							src={
								import.meta.env.VITE_STRIPE_APP_DEV_URL +
								item.attributes.image.data.attributes.url
							}
							alt={item.attributes.image.data.attributes.alternativeText}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Categories;
