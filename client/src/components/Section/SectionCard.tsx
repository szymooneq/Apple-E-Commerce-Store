import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './SectionCard.scss';

interface props {
	device: string;
	quote: string;
	link: string;
	img: string;
	theme: string;
	children: React.ReactNode;
}

function SectionCard({
	device,
	quote,
	link,
	img,
	theme,
	children
}: props): JSX.Element {
	return (
		<div className="hero-banner" data-theme={theme}>
			<div className="content">
				<div className="text-content">
					{children}
					<h2>{quote}</h2>
					<div className="text-links">
						<Link to={link}>
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
