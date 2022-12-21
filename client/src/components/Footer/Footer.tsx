import './Footer.scss';

export default function Footer(): JSX.Element {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
						cumque officiis blanditiis accusamus, omnis cupiditate mollitia
						corporis pariatur quisquam ipsum dolorem rem aspernatur, aut iusto
						quaerat sunt excepturi quidem eveniet.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
						fugiat, perferendis, amet officiis cupiditate inventore ad vel,
						expedita rem id placeat temporibus ab exercitationem illo possimus
						eaque voluptatibus. Veniam, fuga.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">SD Store</span>
					<span className="copyright">Copyright 2023. All Rights Reserved</span>
				</div>
				<div className="right">
					<img src="images/payment.png" alt="" />
				</div>
			</div>
		</div>
	);
}
