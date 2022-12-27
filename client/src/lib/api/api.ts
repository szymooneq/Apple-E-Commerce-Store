import axios from 'axios';

const params = {
	headers: {
		Authorization: 'bearer ' + import.meta.env.VITE_STRIPE_APP_ADMIN_TOKEN
	}
};

export const fetchData = async (url: string) => {
	try {
		const { data } = await axios.get(
			import.meta.env.VITE_STRIPE_APP_DEV_URL + url,
			params
		);
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};
