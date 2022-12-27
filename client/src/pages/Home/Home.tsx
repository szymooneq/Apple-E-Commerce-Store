import { useEffect } from 'react';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import { fetchData } from '../../lib/api/api';
import './Home.scss';

function Home(): JSX.Element {
	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = () => {
		fetchData('/api/categories?populate=*').then((res) => {
			console.log(res);
		});
	};

	return (
		<>
			<Header />
			<div className="main-content">
				<div className="layout">
					<Categories />
					<Products headingText="Popular Products" />
				</div>
			</div>
		</>
	);
}

export default Home;
