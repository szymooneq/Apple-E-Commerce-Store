import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const queryClient = new QueryClient();

function Layout(): JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<Navbar />
			<Outlet />
			<Footer />
		</QueryClientProvider>
	);
}

export default Layout;
