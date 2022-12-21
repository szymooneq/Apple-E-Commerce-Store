import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.scss';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

const Layout = (): JSX.Element => {
	return (
		<div className="App">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/products/:id',
				element: <Products />
			},
			{
				path: '/product/:id',
				element: <Product />
			}
		]
	}
]);

export default function App(): JSX.Element {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}
