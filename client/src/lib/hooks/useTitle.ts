import { useEffect, useState } from 'react';

const useTitle = (name: string) => {
	const [title, setTitle] = useState(name);

	useEffect(() => {
		document.title = title;
	}, [title]);
};

export default useTitle;
