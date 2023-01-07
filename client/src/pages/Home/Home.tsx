import {
	AirpodsHeader,
	MacBookAirHeader,
	WatchSeries8Header,
	WatchSeries8LogoHeader,
	WatchUltraHeader,
	WatchUltraLogoHeader,
	iPadHeader,
	iPhone14Header,
	iPhone14ProHeader
} from '../../assets/section/index';
import SectionCard from '../../components/Section/SectionCard';
import { HomeCards } from '../../lib/interfaces/home';
import './Home.scss';

const sectionItemsPrimary: HomeCards[] = [
	{
		theme: 'dark',
		device: 'iPhone 14 Pro',
		quote: 'Pro. Beyond.',
		href: '/product/iphone-14-pro',
		img: iPhone14ProHeader
	},
	{
		theme: 'light',
		device: 'iPhone 14',
		quote: 'Big and bigger.',
		href: '/product/iphone-14',
		img: iPhone14Header
	},
	{
		theme: 'dark',
		device: 'AirPods Pro',
		quote: 'Rebuilt from the sound up.',
		href: '/product/airpods-pro-2nd',
		img: AirpodsHeader
	}
];

const sectionItemsSecondary: HomeCards[] = [
	{
		theme: 'light',
		device: 'Watch Ultra',
		quote: 'Adventure awaits',
		href: '/product/apple-watch-ultra',
		img: WatchUltraHeader,
		logo: WatchUltraLogoHeader
	},
	{
		theme: 'dark',
		device: 'Watch Series 8',
		quote: 'A healthy leap ahead',
		href: '/product/apple-watch-8',
		img: WatchSeries8Header,
		logo: WatchSeries8LogoHeader
	},
	{
		theme: 'light',
		device: 'MacBook Air',
		quote: 'Supercharged by M2',
		href: '/product/macbook-air-13-6-m2',
		img: MacBookAirHeader
	},

	{
		theme: 'light',
		device: 'iPad',
		quote: 'Lovable. Drawable. Magical.',
		href: '/product/ipad-10-9',
		img: iPadHeader
	}
];

function Home(): JSX.Element {
	return (
		<>
			<section className="home-section" data-type="primary">
				{sectionItemsPrimary.map((item) => (
					<SectionCard
						key={item.device}
						device={item.device}
						href={item.href}
						img={item.img}
						quote={item.quote}
						theme={item.theme}
						logo={item.logo}
					/>
				))}
			</section>
			<section className="home-section" data-type="secondary">
				{sectionItemsSecondary.map((item) => (
					<SectionCard
						key={item.device}
						device={item.device}
						href={item.href}
						img={item.img}
						quote={item.quote}
						theme={item.theme}
						logo={item.logo}
					/>
				))}
			</section>
		</>
	);
}

export default Home;
