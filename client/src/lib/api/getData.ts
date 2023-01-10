import axios from 'axios';
import { Product } from '../interfaces/product';

interface HttpResponse {
	data: Product[];
	meta: {
		pagination: {
			page: number;
			pageCount: number;
			pageSize: number;
			total: number;
		};
	};
}

const GET_PARAMS = {
	headers: {
		Authorization: 'bearer ' + import.meta.env.VITE_STRAPI_USER_TOKEN
	}
};

const STRIPE_URL = import.meta.env.VITE_STRAPI_SERVER_URL;

const getData = async (query: string) => {
	const dataResponse = await axios
		.get<HttpResponse>(STRIPE_URL + query, GET_PARAMS)
		.then((response) => {
			// console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});

	return dataResponse;
};

export const getProductData = async (slug: string | undefined) => {
	const query = `/api/products?populate[variants][populate]=*&populate[category]=*&[filters][slug]=${slug}`;
	const dataResponse = await getData(query);

	return dataResponse?.data[0];
};

export const getProductList = async (category: string | undefined) => {
	const query = `/api/products?populate=*&[filters][category][slug]=${category}`;
	const dataResponse = await getData(query);

	const productList = dataResponse?.data;
	const productsCategory =
		dataResponse?.data[0].attributes.category.data.attributes.name;
	return { productList, productsCategory };
};

export const getRelatedProducts = async (
	productId: string,
	categoryId: number | undefined
) => {
	const query = `/api/products?populate=*&filters[slug][$ne]=${productId}&filters[category][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`;
	const dataResponse = await getData(query);

	return dataResponse?.data;
};

export const getBySearchProducts = async (params: string) => {
	const query = `/api/products?populate=*&filters[title][$containsi]=${params}`;
	const dataResponse = await getData(query);
	console.log(dataResponse?.data);

	return dataResponse?.data;
};
