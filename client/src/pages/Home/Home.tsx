import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import './Home.scss';

function Home(): JSX.Element {
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
