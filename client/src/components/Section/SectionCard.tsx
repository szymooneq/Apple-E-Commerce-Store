import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HomeCards } from '../../lib/interfaces/home';
import './SectionCard.scss';

function SectionCard({
	theme,
	device,
	quote,
	href,
	img,
	logo
}: HomeCards): JSX.Element {
	return (
		<div className="hero-banner" data-theme={theme}>
			<div className="content">
				<div className="text-content">
					{logo ? (
						<div className="logo">
							<img src={logo} alt={`${device} Logo`} />
						</div>
					) : (
						<h1>{device}</h1>
					)}
					<h2>{quote}</h2>
					<div className="text-links">
						<Link to={href}>
							Shop Now
							<FiChevronRight />
						</Link>
					</div>
				</div>
				<div className="banner-content">
					<img className="banner-img" src={img} alt={device} />
				</div>
			</div>
		</div>
	);
}

export default SectionCard;
