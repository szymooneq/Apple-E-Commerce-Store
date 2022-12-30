import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SectionCard.scss';

interface SectionCard {
	logo?: string;
	h1?: string;
	h2: string;
	link: string;
	linkColor: string;
	textColor: string;
	img: string;
	imgAlt: string;
	bgColor: string;
}

function SectionCard({
	logo,
	h1,
	h2,
	link,
	linkColor,
	textColor,
	img,
	imgAlt,
	bgColor
}: SectionCard): JSX.Element {
	return (
		<div className="hero-banner" style={{ backgroundColor: bgColor }}>
			<div className="content">
				<div className="text-content" style={{ color: textColor }}>
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					{h1 && <h1>{h1}</h1>}
					<h2>{h2}</h2>
					<div className="text-links">
						<Link to={link} style={{ color: linkColor }}>
							Shop Now
							<FiChevronRight />
						</Link>
					</div>
				</div>
				<div className="banner-content">
					<img className="banner-img" src={img} alt={imgAlt} />
				</div>
			</div>
		</div>
	);
}

export default SectionCard;
