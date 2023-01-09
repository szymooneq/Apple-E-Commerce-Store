import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './index.scss';
import AppContext from './lib/context/CartContext';
import NotFound from './pages/404/NotFound';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'category/:category',
				element: <Category />
			},
			{
				path: '/product/:slug',
				element: <Product />
			},
			{
				path: '*',
				element: <NotFound />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppContext>
			<RouterProvider router={router} />
		</AppContext>
	</React.StrictMode>
);
