import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa';
import './Newsletter.scss';

function Newsletter(): JSX.Element {
	return (
		<div className="newsletter-section">
			<div className="newsletter-content">
				<span className="small-text">Newsletter</span>
				<span className="big-text">Sign up for latest updates and offers</span>
				<div className="form">
					<input type="text" placeholder="E-mail Address" />
					<button>Subscribe</button>
				</div>
				<div className="text">
					Will be used in accordance with our Privacy Policy
				</div>
				<div className="social-icons">
					<div className="icon">
						<FaFacebookF size={14} />
					</div>
					<div className="icon">
						<FaTwitter size={14} />
					</div>
					<div className="icon">
						<FaInstagram size={14} />
					</div>
					<div className="icon">
						<FaLinkedin size={14} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
