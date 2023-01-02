import {
	FaApplePay,
	FaCcPaypal,
	FaCcVisa,
	FaEnvelope,
	FaLocationArrow,
	FaMobileAlt,
	FaStripe
} from 'react-icons/fa';
import { SiMastercard } from 'react-icons/si';
// import Payments from '../../../assets/payments.png';
import './Footer.scss';

function Footer(): JSX.Element {
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="col">
					<h3 className="title">About</h3>
					<div>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rem,
						sunt nemo facilis unde doloremque animi veritatis nihil nesciunt qui
						nostrum repudiandae iure quas doloribus nulla libero dolorem
						praesentium debitis.
					</div>
				</div>
				<div className="col">
					<h3 className="title">Contact</h3>
					<ul>
						<li className="c-item">Adress 01, City, 00-000</li>
						<li className="c-item">Phone: +48 000 000 000</li>
						<li className="c-item">Email: storeSD@shop.com</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="title">Categories</h3>
					<ul>
						<li>Headphones</li>
						<li>Smart Watches</li>
						<li>Bluetooth Speakers</li>
						<li>Wireless Earbuds</li>
						<li>Home Theatre</li>
						<li>Projectors</li>
					</ul>
				</div>
				<div className="col">
					<h3 className="title">Pages</h3>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Privacy Policy</li>
						<li>Returns</li>
						<li>Terms & Conditions</li>
						<li>Contact Us</li>
					</ul>
				</div>
			</div>
			<div className="bottom-bar">
				<div className="bottom-bar-content">
					<p className="copyright">
						Apple E-Commerce Store &copy; 2023 | Created by{' '}
						<a
							className="copyright-name"
							href="https://szymondudka.xyz/"
							target="_blank"
							rel="noreferrer">
							Szymon Dudka
						</a>
					</p>
					<div className="payments-icons">
						<FaApplePay />
						<FaStripe />
						<FaCcVisa />
						<SiMastercard />
						<FaCcPaypal />
					</div>
					{/* <img src={Payments} alt="Payments" /> */}
				</div>
			</div>
		</div>
	);
}

export default Footer;
