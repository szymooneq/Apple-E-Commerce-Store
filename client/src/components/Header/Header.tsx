import headerImg from '../../assets/headerImg.png';
import './Header.scss';

function Header() {
	return (
		<div className="hero-banner">
			<div className="content">
				<div className="text-content">
					<h1>SALES</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
						voluptas cumque earum fugiat rerum rem saepe, mollitia, dignissimos,
						excepturi sint doloribus perspiciatis beatae tenetur aperiam ipsum
						autem odio dolores sed.
					</p>
					<div className="ctas">
						<div className="banner-cta">Read More</div>
						<div className="banner-cta v2">Shop Now</div>
					</div>
				</div>
				<img className="banner-img" src={headerImg} alt="Headphones" />
			</div>
		</div>
	);
}

export default Header;
