import { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { TbSearch } from 'react-icons/tb';
import './Navbar.scss';

function Navbar(): JSX.Element {
	const [scrolled, setScrolled] = useState<boolean>(false);

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
		<nav className={`main-navbar ${scrolled ? 'sticky-navbar' : ''}`}>
			<div className="navbar-content">
				<ul className="left">
					<li>Home</li>
					<li>About</li>
					<li>Categories</li>
				</ul>
				<div className="center">SD Store</div>
				<div className="right">
					<TbSearch />
					<AiOutlineHeart />
					<span className="cart-icon">
						<CgShoppingCart />
						<span>5</span>
					</span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
