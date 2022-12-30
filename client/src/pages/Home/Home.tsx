import { useContext, useEffect } from 'react';
import Airpods from '../../assets/header/AirpodsHeader.png';
import WatchSeries8Header from '../../assets/header/WatchSeries8Header.jpg';
import WatchSeries8LogoHeader from '../../assets/header/WatchSeries8LogoHeader.png';
import WatchUltraHeader from '../../assets/header/WatchUltraHeader.jpg';
import WatchUltraLogoHeader from '../../assets/header/WatchUltraLogoHeader.png';
import iPhone14 from '../../assets/header/iPhone14Header.png';
import iPhone14Pro from '../../assets/header/iPhone14ProHeader.png';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import SectionCard from '../../components/SectionCard/SectionCard';
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
			<section className="home-section" data-type="primary">
				<SectionCard
					h1="iPhone 14 Pro"
					h2="Pro. Beyond."
					link="/"
					linkColor="#2997ff"
					img={iPhone14Pro}
					imgAlt="iPhone 14 Pro"
					bgColor="#000000"
					textColor="#FFFFFF"
				/>

				<SectionCard
					h1="iPhone 14"
					h2="Big and bigger."
					link="/"
					linkColor="#0066cc"
					img={iPhone14}
					imgAlt="iPhone 14"
					bgColor="#FBFBFD"
					textColor="#000000"
				/>

				<SectionCard
					h1="AirPods Pro"
					h2="Rebuilt from the sound up."
					link="/"
					linkColor="#2997ff"
					img={Airpods}
					imgAlt="Airpods"
					bgColor="#000000"
					textColor="#FFFFFF"
				/>
			</section>

			<section className="home-section" data-type="secondary">
				<SectionCard
					logo={WatchUltraLogoHeader}
					h2="Adventure awaits"
					link="/"
					linkColor="#0066cc"
					img={WatchUltraHeader}
					imgAlt="Watch Ultra"
					bgColor="rgb(251, 251, 253)"
					textColor="#000000"
				/>

				<SectionCard
					logo={WatchSeries8LogoHeader}
					h2="Adventure awaits"
					link="/"
					linkColor="#2997ff"
					img={WatchSeries8Header}
					imgAlt="Watch Ultra"
					bgColor="#000000"
					textColor="#FFFFFF"
				/>

				<SectionCard
					logo={WatchUltraLogoHeader}
					h2="Adventure awaits"
					link="/"
					linkColor="#0066cc"
					img={WatchUltraHeader}
					imgAlt="Watch Ultra"
					bgColor="#FBFBFD"
					textColor="#000000"
				/>

				<SectionCard
					logo={WatchUltraLogoHeader}
					h2="Adventure awaits"
					link="/"
					linkColor="#0066cc"
					img={WatchUltraHeader}
					imgAlt="Watch Ultra"
					bgColor="#FBFBFD"
					textColor="#000000"
				/>
			</section>

			<div className="main-content">
				<div className="layout">
					<Categories categories={categories} />
					<Products products={products} headingText="Popular Products" />
				</div>
			</div>
		</>
	);
}

export default Home;
