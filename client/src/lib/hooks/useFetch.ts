import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../api/api';

const useFetch = (endpoint: string) => {
	const [data, setData] = useState();

	const makeApiCall = async () => {
		const res = await fetchDataFromApi(endpoint);
		setData(res);
	};

	useEffect(() => {
		makeApiCall();
	}, [endpoint]);

	return { data };
};

export default useFetch;
