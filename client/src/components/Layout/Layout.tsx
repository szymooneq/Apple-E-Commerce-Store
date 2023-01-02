import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout(): JSX.Element {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
