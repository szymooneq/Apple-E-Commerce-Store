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
import SectionCard from './SectionCard';
import './SectionCollection.scss';

function SectionCollection(): JSX.Element {
	return (
		<>
			<section className="home-section" data-type="primary">
				<SectionCard
					theme="dark"
					device="iPhone 14 Pro"
					quote="Pro. Beyond."
					link="/product/iphone-14-pro"
					img={iPhone14ProHeader}>
					<h1>iPhone 14 Pro</h1>
				</SectionCard>

				<SectionCard
					theme="light"
					device="iPhone 14"
					quote="Big and bigger."
					link="/product/iphone-14"
					img={iPhone14Header}>
					<h1>iPhone 14</h1>
				</SectionCard>

				<SectionCard
					theme="dark"
					device="AirPods Pro"
					quote="Rebuilt from the sound up."
					link="/product/airpods-pro-2nd"
					img={AirpodsHeader}>
					<h1>AirPods Pro</h1>
				</SectionCard>
			</section>

			<section className="home-section" data-type="secondary">
				<SectionCard
					theme="light"
					device="Watch Ultra"
					quote="Adventure awaits"
					link="/product/apple-watch-ultra"
					img={WatchUltraHeader}>
					<div className="logo">
						<img src={WatchUltraLogoHeader} alt="Watch Ultra Logo" />
					</div>
				</SectionCard>

				<SectionCard
					theme="dark"
					device="Watch Series 8"
					quote="A healthy leap ahead"
					link="/product/apple-watch-8"
					img={WatchSeries8Header}>
					<div className="logo">
						<img src={WatchSeries8LogoHeader} alt="Watch Series 8 Logo" />
					</div>
				</SectionCard>

				<SectionCard
					theme="light"
					device="MacBook Air"
					quote="Supercharged by M2"
					link="/product/macbook-air-13-6-m2"
					img={MacBookAirHeader}>
					<h1>MacBook Air</h1>
				</SectionCard>

				<SectionCard
					theme="light"
					device="iPad"
					quote="Lovable. Drawable. Magical."
					link="/product/ipad-10-9"
					img={iPadHeader}>
					<h1>iPad</h1>
				</SectionCard>
			</section>
		</>
	);
}

export default SectionCollection;
