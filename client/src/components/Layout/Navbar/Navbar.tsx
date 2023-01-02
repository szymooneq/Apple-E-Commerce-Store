import { useContext, useEffect, useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { FaApple } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Context } from '../../../lib/context/AppContext';
import Cart from '../../Cart/Cart';
import Search from '../../Search/Search';
import './Navbar.scss';

function Navbar(): JSX.Element {
	const [scrolled, setScrolled] = useState<boolean>(false);
	const [showCart, setShowCart] = useState<boolean>(false);
	const [showSearch, setShowSearch] = useState<boolean>(false);
	const { cartCount } = useContext(Context);

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
						<li>Store</li>
						<li>Mac</li>
						<li>iPad</li>
						<li>iPhone</li>
						<li>Watch</li>
						<li>AirPods</li>
					</ul>
					<div className="right">
						<div className="icon">
							<TbSearch onClick={() => setShowSearch((prev) => !prev)} />
						</div>
						<div className="icon" onClick={() => setShowCart((prev) => !prev)}>
							<BsHandbag />
							{cartCount !== 0 && <span>{cartCount}</span>}
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
