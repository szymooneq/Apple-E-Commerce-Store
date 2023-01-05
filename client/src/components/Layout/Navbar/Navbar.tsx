import { useContext, useEffect, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../lib/context/CartContext';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import './Navbar.scss';

function Navbar(): JSX.Element {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [showCart, setShowCart] = useState<boolean>(false);
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const { cartState } = useContext(CartContext);

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'Mac', path: '/mac' },
		{ name: 'iPad', path: '/ipad' },
		{ name: 'iPhone', path: '/iphone' },
		{ name: 'Watch', path: '/apple-watch' },
		{ name: 'AirPods', path: '/airpods' }
	];

	const handleScroll = () => {
		const offset: number = window.scrollY;
		if (offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<nav className={`main-navbar ${scrolled ? 'sticky-navbar' : ''}`}>
				<div className="navbar-content">
					<div className="left">
						<Link to="/">
							<FaApple />
						</Link>
					</div>
					<ul className="center">
						{navLinks.map((link) => (
							<li key={link.name}>
								<Link to={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
					<div className="right">
						<div className="icon">
							<TbSearch onClick={() => setShowSearch((prev) => !prev)} />
						</div>
						<div className="icon" onClick={() => setShowCart((prev) => !prev)}>
							<BsHandbag />
							{cartState.cartCount !== 0 && <span>{cartState.cartCount}</span>}
						</div>
					</div>
				</div>
			</nav>
			<div
				className={`opac-layer ${showCart ? 'opac-layer-active' : ''}`}
				onClick={() => setShowCart(false)}></div>
			<Cart showCart={showCart} setShowCart={setShowCart} />
			{showSearch && <Search setShowSearch={setShowSearch} />}
		</>
	);
}

export default Navbar;
