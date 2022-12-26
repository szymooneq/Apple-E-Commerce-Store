import { Outlet } from 'react-router';
import Newsletter from '../Newsletter/Newsletter';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout(): JSX.Element {
	return (
		<>
			<Navbar />
			<Outlet />
			<Newsletter />
			<Footer />
		</>
	);
}

export default Layout;
