import axios from 'axios';
import { product } from '../interfaces/product';

const params = {
	headers: {
		Authorization: 'bearer ' + import.meta.env.VITE_STRIPE_APP_ADMIN_TOKEN
	}
};

interface HttpResponse {
	data: product[];
	meta: {
		pagination: {
			page: number;
			pageCount: number;
			pageSize: number;
			total: number;
		};
	};
}

export const fetchDataFromApi = async (url: string) => {
	const { data, meta } = await axios
		.get<HttpResponse>(import.meta.env.VITE_STRIPE_APP_DEV_URL + url, params)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(error.message);
			throw new Error(error.message);
		});

	return data;
};

export const makePaymentRequest = axios.create({
	baseURL: import.meta.env.VITE_STRIPE_APP_DEV_URL,
	headers: {
		Authorization: 'bearer ' + import.meta.env.VITE_STRIPE_APP_ADMIN_TOKEN
	}
});
