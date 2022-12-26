import { FaEnvelope, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import Payments from '../../../assets/payments.png';
import './Footer.scss';

function Footer(): JSX.Element {
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="col">
					<div className="title">About</div>
					<div className="text">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rem,
						sunt nemo facilis unde doloremque animi veritatis nihil nesciunt qui
						nostrum repudiandae iure quas doloribus nulla libero dolorem
						praesentium debitis.
					</div>
				</div>
				<div className="col">
					<div className="title">Contact</div>
					<div className="c-item">
						<FaLocationArrow />
						<div className="text">Adres 1, Miasto, 00-000</div>
					</div>
					<div className="c-item">
						<FaMobileAlt />
						<div className="text">Phone: +48 000 000 000</div>
					</div>
					<div className="c-item">
						<FaEnvelope />
						<div className="text">Email: storeSD@shop.com</div>
					</div>
				</div>
				<div className="col">
					<div className="title">Categories</div>
					<span className="text">Headphones</span>
					<span className="text">Smart Watches</span>
					<span className="text">Bluetooth Speakers</span>
					<span className="text">Wireless Earbuds</span>
					<span className="text">Home Theatre</span>
					<span className="text">Projectors</span>
				</div>
				<div className="col">
					<div className="title">Pages</div>
					<span className="text">Home</span>
					<span className="text">About</span>
					<span className="text">Privacy Policy</span>
					<span className="text">Returns</span>
					<span className="text">Terms & Conditions</span>
					<span className="text">Contact Us</span>
				</div>
			</div>
			<div className="bottom-bar">
				<div className="bottom-bar-content">
					<div className="text">
						SDSTORE 2023 CREATED BY SD. PREMIUM E-COMMERCE SOLUTIONS
					</div>
					<img src={Payments} alt="Payments" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
