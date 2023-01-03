import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../api/api';

const useFetch = (endpoint: string, setState) => {
	const [data, setData] = useState();

	const makeApiCall = async () => {
		const res = await fetchDataFromApi(endpoint);
		setData(res);
		setState(res.data[0].attributes.variants[0]);
	};

	useEffect(() => {
		makeApiCall();
	}, [endpoint]);

	return { data };
};

export default useFetch;
