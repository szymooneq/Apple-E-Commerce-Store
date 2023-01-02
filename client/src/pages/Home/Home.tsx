import { useContext, useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import SectionCollection from '../../components/Section/SectionCollection';
import { fetchDataFromApi } from '../../lib/api/api';
import { Context } from '../../lib/context/AppContext';
import './Home.scss';

function Home(): JSX.Element {
	const { categories, setCategories, products, setProducts } =
		useContext(Context);

	useEffect(() => {
		getProducts();
		getCategories();
	}, []);

	const getProducts = () => {
		fetchDataFromApi('/api/products?populate=*').then((res) => {
			console.log(res);
			setProducts(res);
		});
	};

	const getCategories = () => {
		fetchDataFromApi('/api/categories?populate=*').then((res) => {
			setCategories(res);
		});
	};

	return (
		<>
			<SectionCollection />
			<div className="main-content">
				<div className="layout">
					{/* <Categories categories={categories} /> */}
					<Products products={products} headingText="Popular Products" />
				</div>
			</div>
		</>
	);
}

export default Home;
