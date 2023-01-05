import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './index.scss';
import AppContext from './lib/context/CartContext';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/:category',
				element: <Category />
			},
			{
				path: '/product/:id',
				element: <Product />
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
