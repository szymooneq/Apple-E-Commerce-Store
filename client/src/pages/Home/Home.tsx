import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

export default function Home(): JSX.Element {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts type="featured" />
			<FeaturedProducts type="trending" />
		</div>
	);
}
