import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../api/api';
import { product } from '../interfaces/product';

const useFetch = (endpoint: string) => {
	const [data, setData] = useState<product[]>();
	const [loading, setLoading] = useState<boolean>(true);

	const makeApiCall = async () => {
		const res = await fetchDataFromApi(endpoint);
		setData(res);
		setLoading(false);
	};

	useEffect(() => {
		makeApiCall();
	}, [endpoint]);

	return [data, loading];
};

export default useFetch;
